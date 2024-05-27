import React from "react";
import './Project.scss';

const Project = ({title, description, link}) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}

export default Project;