import React, { useState } from 'react';
import './Projects.scss';
import Project from '../Project/Project';
import { ProjectsData } from '../../constants/constants';

const Projects = ({ image, title, category, description, webLink, codeLink }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? ProjectsData
        : ProjectsData.filter(project => project.category === selectedCategory);

    const categories = ['All', ...new Set(ProjectsData.map(project => project.category))];

    return (
        <section id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='projects'>
                            <h2 className="section-title">Projects</h2>
                            <div className='filters'>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        className={'filters-btn ' + (selectedCategory === category ? 'selected' : '')}
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {filteredProjects.map((project, index) => (
                        <div className='col-md-4' key={index}>
                            <Project
                                image={project.image}
                                title={project.title}
                                category={project.category}
                                description={project.description}
                                webLink={project.webLink}
                                codeLink={project.codeLink}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
