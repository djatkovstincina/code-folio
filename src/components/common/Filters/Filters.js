import React, { useCallback } from "react";
import PropTypes from "prop-types";
import './Filters.scss';

const Filters = ({ categories, selectedCategory, handleCategoryChange }) => {

    const handleOptionClick = useCallback((category) => {
        handleCategoryChange(category);
    }, [handleCategoryChange]);

    return (
        <div className='filters' role="group" aria-label="Filter projects by category">
            {categories.map(category => (
                <button
                    key={category}
                    className={'filters-btn ' + (selectedCategory === category ? 'selected' : '')}
                    onClick={() => handleOptionClick(category)}
                    aria-pressed={selectedCategory === category}
                    aria-label={`Filter projects by ${category} ${category === 'All' ? 'categories' : 'category'}`}
                    type="button"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

Filters.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string.isRequired,
    handleCategoryChange: PropTypes.func.isRequired,
};

// Memoize the Filters component to prevent unnecessary re-renders
export default React.memo(Filters);