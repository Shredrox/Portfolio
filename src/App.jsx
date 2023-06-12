import { useState, useRef } from 'react'
import { WelcomeSection } from './components/WelcomeSection'
import { Header } from './components/Header'
import { AboutMeSection } from './components/AboutMeSection'
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  const ref = useRef(null);

  const handleClick = (elementRef) =>{
    window.scrollTo({top: elementRef.current.offsetTop, behavior: 'smooth'});
  }

  return (
    <>
      <Header scroll={handleClick} aboutMeRef={ref}/>
      <WelcomeSection/>
      <AboutMeSection refe={ref}/>
      <ProjectsSection/>
    </>
  )
}

export default App
