import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/section/Hero';
import About from './components/section/About';
import Skills from './components/section/Skills';
import Projects from './components/section/Projects';
import Services from './components/section/Services';
import Contact from './components/section/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero /> {/* Isi paling atas dan foto + icon scrol bawah */}
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
