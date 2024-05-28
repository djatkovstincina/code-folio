import React from "react";
import './Project.scss';
import { AiFillRightCircle } from "react-icons/ai";

const Project = ({ image, title, category, description, webLink, codeLink }) => {
    const webLinkBtn = webLink && (
        <a href={webLink} target="_blank" rel="noreferrer" className="project-link">
            <span>View Project</span>
            <AiFillRightCircle size="1.25em" />
        </a>
    );

    const codeLinkBtn = codeLink && (
        <a href={codeLink} target="_blank" rel="noreferrer" className="project-link">
            <span>View Code</span>
            <AiFillRightCircle size="1.25em" />
        </a>
    );

    return (
        <div className="project">
            <div className="project-image-wrap">
                <img src={image} alt={title} className="project-image" />
                <div className="project-category">{category}</div>
            </div>
            <div className="project-content">
                <h2 className="project-title">{title}</h2>
                <p className="project-desc">{description}</p>
                <div className="project-link-wrap">
                    {webLinkBtn}
                    {codeLinkBtn}
                </div>
            </div>
        </div>
    );
}

export default Project;
