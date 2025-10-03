// Main constants export file - centralized imports
export * from './urls.js';
export * from './config.js';
export * from './data/projects.js';

// Re-export everything from the old constants for backward compatibility
export {
    EXTERNAL_URLS,
    CONTACT_INFO,
    UpworkUrl,
    ResumeUrl,
    GithubUrl,
    LinkedInUrl,
    PersonalEmail,
    PersonalPhone
} from './urls.js';

export {
    APP_CONFIG,
    UI_CONFIG,
    IMAGE_CONFIG
} from './config.js';

export {
    PROJECTS_DATA,
    ProjectsData
} from './data/projects.js';
