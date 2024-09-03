import React from "react";
import './Filters.scss';

const Filters = ({ categories, selectedCategory, handleCategoryChange }) => {

    const handleOptionClick = (category) => {
        handleCategoryChange(category);
    };

    return (
        <div className='filters'>
            {categories.map(category => (
                <button
                    key={category}
                    className={'filters-btn ' + (selectedCategory === category ? 'selected' : '')}
                    onClick={() => handleOptionClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Filters;