import React, { Suspense } from 'react';
import './styles/style.scss';
import { Header, LoadingSpinner, Hero } from './components';

// Lazy load components that are below the fold
const Projects = React.lazy(() => import('./components/sections/Projects/Projects'));
const Technologies = React.lazy(() => import('./components/sections/Technologies/Technologies'));
const About = React.lazy(() => import('./components/sections/About/About'));
const Contact = React.lazy(() => import('./components/sections/Contact/Contact'));
const Footer = React.lazy(() => import('./components/layout/Footer/Footer'));


function App() {

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="App">
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          <Hero />
          <Suspense fallback={<LoadingSpinner message="Loading projects..." />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Loading technologies..." />}>
            <Technologies />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Loading about section..." />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Loading contact information..." />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingSpinner message="Loading footer..." />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
