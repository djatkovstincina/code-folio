import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import './Dropdown.scss';

const Dropdown = ({ options, selectedCategory, handleCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    const handleOptionClick = useCallback((category) => {
        handleCategoryChange(category);
        setIsOpen(false);
    }, [handleCategoryChange]);

    return (
        <div className="select">
            <button
                className="select-header"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-label={`Filter projects by category. Currently selected: ${selectedCategory}`}
                id="category-dropdown-button"
                type="button"
            >
                {selectedCategory}
                <span className={`arrow ${isOpen ? 'open' : ''}`} aria-hidden="true"></span>
            </button>
            {isOpen && (
                <ul
                    className="select-list"
                    role="listbox"
                    aria-labelledby="category-dropdown-button"
                    aria-label="Project categories"
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`select-list-item ${selectedCategory === option ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                            role="option"
                            aria-selected={selectedCategory === option}
                            tabIndex={selectedCategory === option ? 0 : -1}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedCategory: PropTypes.string.isRequired,
    handleCategoryChange: PropTypes.func.isRequired,
};

// Memoize the Dropdown component to prevent unnecessary re-renders
export default React.memo(Dropdown);