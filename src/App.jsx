import { useState, useRef } from 'react'
import { WelcomeSection } from './components/WelcomeSection'
import { Header } from './components/Header'
import { AboutMeSection } from './components/AboutMeSection'
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  const handleClick = (elementRef) =>{
    window.scrollTo({top: elementRef.current.offsetTop, behavior: 'smooth'});
  }

  return (
    <>
      <Header scroll={handleClick} aboutMeRef={aboutMeRef} projectsRef={projectsRef}/>
      <WelcomeSection/>
      <AboutMeSection elRef={aboutMeRef}/>
      <ProjectsSection elRef={projectsRef}/>
    </>
  )
}

export default App
