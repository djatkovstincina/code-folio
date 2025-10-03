import React, { useState, useMemo, useCallback } from "react";
import './Projects.scss';
import Project from '../Project/Project';
import { Dropdown, Filters } from "../../common";
import { ProjectsData } from '../../../constants';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Memoize the filtered projects to avoid recalculation on every render
    const filteredProjects = useMemo(() => {
        return selectedCategory === 'All'
            ? ProjectsData
            : ProjectsData.filter(project =>
                Array.isArray(project.category)
                    ? project.category.includes(selectedCategory)
                    : project.category === selectedCategory
            );
    }, [selectedCategory]);

    // Memoize the categories calculation since ProjectsData doesn't change
    const categories = useMemo(() => {
        const allCategories = ProjectsData.reduce((acc, project) => {
            if (Array.isArray(project.category)) {
                project.category.forEach(cat => acc.add(cat));
            } else {
                acc.add(project.category);
            }
            return acc;
        }, new Set());

        return ['All', ...Array.from(allCategories).sort()];
    }, []);

    // Memoize the category change handler
    const handleCategoryChange = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    return (
        <section id="projects" aria-labelledby="projects-heading">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='projects'>
                            <h2 id="projects-heading" className="section-title">Projects</h2>

                            <div className="projects-filters" role="region" aria-label="Project category filters">
                                <Dropdown
                                    options={categories}
                                    selectedCategory={selectedCategory}
                                    handleCategoryChange={handleCategoryChange}
                                />

                                <Filters
                                    categories={categories}
                                    selectedCategory={selectedCategory}
                                    handleCategoryChange={handleCategoryChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="projects-grid" role="region" aria-label="Projects list">
                            <div className="sr-only" aria-live="polite">
                                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                                {selectedCategory !== 'All' ? ` in ${selectedCategory} category` : ''}
                            </div>
                            <div className="row">
                                {filteredProjects.map((project) => (
                                    <div className='col-sm-12 col-md-6 col-lg-4' key={project.title}>
                                        <Project
                                            image={project.image}
                                            title={project.title}
                                            category={project.category}
                                            description={project.description}
                                            webLink={project.webLink}
                                            codeLink={project.codeLink}
                                            designLink={project.designLink}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
