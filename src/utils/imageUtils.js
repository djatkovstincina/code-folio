/**
 * Image utility functions
 */

import { IMAGE_CONFIG } from '../constants/config.js';

/**
 * Handles image loading errors with fallback
 * @param {Event} e - Error event
 * @param {string} altText - Alternative text for the image
 */
export const handleImageError = (e, altText = IMAGE_CONFIG.DEFAULT_ALT) => {
    e.target.src = IMAGE_CONFIG.PLACEHOLDER;
    e.target.alt = `${altText} - image failed to load`;
};

/**
 * Generates optimized image attributes
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @param {boolean} lazy - Whether to lazy load
 * @returns {Object} Image attributes object
 */
export const getImageAttributes = (src, alt, lazy = IMAGE_CONFIG.LAZY_LOADING) => {
    const attributes = {
        src,
        alt,
        decoding: 'async',
    };

    if (lazy) {
        attributes.loading = 'lazy';
    }

    return attributes;
};
