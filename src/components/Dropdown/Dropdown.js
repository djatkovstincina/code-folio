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
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedCategory}
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li 
                            key={index} 
                            className={`dropdown-list-item ${selectedCategory === option ? 'selected' : ''}`} 
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