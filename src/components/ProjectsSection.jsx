import React from 'react'
import { useState, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import projectPlaceholder from '../assets/projects/project-placeholder.webp'
import musicUniverse from '../assets/projects/musicUniverse.png'
import UniVerse from '../assets/projects/UniVerse.jpg'

export const ProjectsSection = ({elRef}) => {
  const [projectSelected, setProjectSelected] = useState('');
  const [image, setImage] = useState(null);
  const [projectTitle, setProjectTitle] = useState('Click on a planet to view a project');
  const [projectLink, setProjectLink] = useState('');

  const isInView = useInView(elRef, {once: true});
  const animationControls = useAnimation();

  useEffect(() =>{
    if(isInView){
      animationControls.start("visible");
    }
  }, [isInView]);

  function selectProject(id, image, projectTitle, projectLink){
    if(id == projectSelected){
      id = '';
      image = null;
      projectTitle = 'Click on a planet to view a project';
      projectLink = '';
    }
    
    setProjectSelected(id);
    setImage(image);
    setProjectTitle(projectTitle);
    setProjectLink(projectLink);
  }

  return (
    <div ref={elRef} className='projects-section'>
      <div className="projects-container">

        <motion.div className='lines-container'
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1}
        }}
        initial="hidden"
        animate={animationControls}
        transition={{duration: 1}}>
         <div className='straight-line-short'></div>
         <div className="point"/>
         <div className='straight-line-long'></div>
        </motion.div>

        <motion.div className="projects-display-container"
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={animationControls}
        transition={{duration: 1}}>
          <div className='system-container'>
            <h2>Projects</h2>
            <div className='solar-system'>
              <div className='ellipse'></div>
              <div className="solar-orbit1">
                <div 
                onClick={() => selectProject('1', UniVerse, 'UniVerse' , 'https://github.com/Shredrox/UniVerseRemastered')} 
                className={projectSelected == '1' ? 'selected-planet' : 'orbiting-ellipse'}></div>
              </div>
              <div className="solar-orbit2">
                <div 
                onClick={() => selectProject('2', projectPlaceholder, 'LifeLink', 'https://github.com/Shredrox/LifeLink')} 
                className={projectSelected == '2' ? 'selected-planet' : 'orbiting-ellipse'}></div>
              </div>
              <div className="solar-orbit3">
                <div 
                onClick={() => selectProject('3', projectPlaceholder, 'TuneSpace', 'https://github.com/Shredrox/TuneSpace')} 
                className={projectSelected == '3' ? 'selected-planet' : 'orbiting-ellipse'}></div>
              </div>
              <div className="solar-orbit4">
                <div 
                onClick={() => selectProject('4', musicUniverse, 'Music Universe' , 'https://github.com/Shredrox/Music-Universe')} 
                className={projectSelected == '4' ? 'selected-planet' : 'orbiting-ellipse'}></div>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h3>{projectTitle}</h3>
            <img src={image} alt="" />
            {projectLink !== '' &&
            <a href={projectLink} target='_blank'><button>Github Repo</button></a>
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
}
