import React, { useEffect, useState } from "react";
import './Projects.scss';
import Project from '../Project/Project';
import Dropdown from "../Dropdown/Dropdown";
import Filters from "../Filters/Filters";
import { ProjectsData } from '../../constants/constants';
import axios from "axios";

const API_URL = 'https://api.unsplash.com';

const Projects = () => {
    const [images, setImages] = useState([]);
    const [projectImages, setProjectImages] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('All');

    const fetchImages = async () => {
        try {
            const { data } = await axios.get(
                `${API_URL}/collections/${process.env.REACT_APP_UNSPLASH_COLLECTION_ID}/photos`, {
                params: {
                    client_id: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
                    per_page: 30,
                }
            }
            );
            setImages(data);
        } catch (error) {
            console.error('Error fetching images', error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const selectedImages = {};
            const usedImageIds = new Set();

            ProjectsData.forEach((project) => {
                let availableImages = images.filter(image => !usedImageIds.has(image.id));

                if (availableImages.length === 0) {
                    usedImageIds.clear();
                    availableImages = images;
                }

                const randomIndex = Math.floor(Math.random() * availableImages.length);
                const selectedImage = availableImages[randomIndex];

                usedImageIds.add(selectedImage.id);
                selectedImages[project.title] = selectedImage.urls.small;
            });

            setProjectImages(selectedImages);
        }
    }, [images]);

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

                            <Dropdown
                                options={categories}
                                selectedCategory={selectedCategory}
                                handleCategoryChange={setSelectedCategory}
                            />

                            <Filters
                                categories={categories}
                                selectedCategory={selectedCategory}
                                handleCategoryChange={setSelectedCategory}
                            />
                        </div>
                    </div>
                    {filteredProjects.map((project, index) => (
                        <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
                            <Project
                                image={projectImages[project.title] || project.image}
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
