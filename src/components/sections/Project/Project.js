import React, { useCallback } from "react";
import PropTypes from "prop-types";
import './Project.scss';
import { AiFillRightCircle } from "react-icons/ai";

const Project = ({ title, image, category, description, webLink, codeLink, designLink }) => {
    const handleImageError = useCallback((e) => {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBJbWFnZTwvdGV4dD48L3N2Zz4=';
        e.target.alt = `Placeholder image for ${title} project - image failed to load`;
    }, [title]);

    const webLinkBtn = webLink && (
        <a
            href={webLink}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View ${title} project website (opens in new tab)`}
        >
            <span>View Project</span>
            <AiFillRightCircle size="1.25em" aria-hidden="true" />
        </a>
    );

    const codeLinkBtn = codeLink && (
        <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View ${title} source code (opens in new tab)`}
        >
            <span>View Code</span>
            <AiFillRightCircle size="1.25em" aria-hidden="true" />
        </a>
    );

    const designLinkBtn = designLink && (
        <a
            href={designLink}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`View ${title} design files (opens in new tab)`}
        >
            <span>View Design</span>
            <AiFillRightCircle size="1.25em" aria-hidden="true" />
        </a>
    );

    return (
        <article className="project" aria-labelledby={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="project-image-wrap">
                <img
                    src={image}
                    alt={`Screenshot of ${title} project showing the user interface and design`}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                />
                <div className="project-categories" role="group" aria-label="Project technologies">
                    {Array.isArray(category) ? category.map((element, index) => (
                        <span className="category" key={index} role="img" aria-label={`Technology: ${element}`}>
                            {element}
                        </span>
                    )) : (
                        <span className="category" role="img" aria-label={`Technology: ${category}`}>
                            {category}
                        </span>
                    )}
                </div>
            </div>
            <div className="project-content">
                <h3 id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`} className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
                <nav className="project-link-wrap" role="navigation" aria-label={`${title} project links`}>
                    {webLinkBtn}
                    {codeLinkBtn}
                    {designLinkBtn}
                </nav>
            </div>
        </article>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    description: PropTypes.string.isRequired,
    webLink: PropTypes.string,
    codeLink: PropTypes.string,
    designLink: PropTypes.string,
};

// Memoize the Project component to prevent unnecessary re-renders
export default React.memo(Project);
