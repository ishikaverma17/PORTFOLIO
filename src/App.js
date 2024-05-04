import React, { useEffect }  from 'react';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Aos from "aos";
import "aos/dist/aos.css"

const  App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <div className='container'>
           <Home />
           <Experience />
           <Skills />
           <Project />
           <Contact />
      </div>
    </>
  );
}

export default App;
