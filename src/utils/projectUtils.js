/**
 * Project utility functions
 */

/**
 * Extracts unique categories from projects data
 * @param {Array} projects - Array of project objects
 * @returns {Array} Array of unique categories including 'All'
 */
export const extractCategories = (projects) => {
    const allCategories = projects.reduce((acc, project) => {
        if (Array.isArray(project.category)) {
            project.category.forEach(cat => acc.add(cat));
        } else {
            acc.add(project.category);
        }
        return acc;
    }, new Set());

    return ['All', ...Array.from(allCategories).sort()];
};

/**
 * Filters projects by category
 * @param {Array} projects - Array of project objects  
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered array of projects
 */
export const filterProjectsByCategory = (projects, category) => {
    if (category === 'All') {
        return projects;
    }

    return projects.filter(project =>
        Array.isArray(project.category)
            ? project.category.includes(category)
            : project.category === category
    );
};

/**
 * Generates a safe key for React components
 * @param {string} title - Project title
 * @returns {string} Safe key string
 */
export const generateProjectKey = (title) => {
    return title.replace(/\s+/g, '-').toLowerCase();
};
