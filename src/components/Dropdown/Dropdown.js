import React, { useState } from "react";
import './Dropdown.scss';

const Dropdown = ({ options, selectedCategory, handleCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (category) => {
        handleCategoryChange(category);
        setIsOpen(false);
    };

    return (
        <div className="select">
            <div className="select-header" onClick={toggleDropdown}>
                {selectedCategory}
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <ul className="select-list">
                    {options.map((option, index) => (
                        <li 
                            key={index} 
                            className={`select-list-item ${selectedCategory === option ? 'selected' : ''}`} 
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;