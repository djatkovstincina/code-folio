import React from 'react';
import './styles/style.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
