import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <div className="loading-spinner" role="status" aria-live="polite">
            <div className="spinner" aria-hidden="true"></div>
            <span className="loading-text">{message}</span>
            <span className="sr-only">Loading content, please wait...</span>
        </div>
    );
};

export default React.memo(LoadingSpinner);
