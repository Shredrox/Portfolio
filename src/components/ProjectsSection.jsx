import React from 'react'
import { useState } from 'react'

export const ProjectsSection = ({elRef}) => {
  const [projectSelected, setProjectSelected] = useState('');

  function selectProject(id){
    if(id == projectSelected){
      id = '';
    }
    setProjectSelected(id);
  }

  return (
    <div ref={elRef} className='projects-section'>
      <div className='straight-line-short'></div>
      <div className='curved-line-down'></div>
      <div className='curved-line-up'></div>
      <div className='straight-line-long'></div>
      <div className='about-me-text'>
        <h2> <div className="point"/>Projects</h2>
        <div className='solar-system'>
          <div className='ellipse'></div>
          <div className="solar-orbit1">
            <div onClick={() => selectProject('1')} className={projectSelected == '1' ? 'selected-planet' : 'orbiting-ellipse'}></div>
          </div>
          <div className="solar-orbit2">
            <div onClick={() => selectProject('2')} className={projectSelected == '2' ? 'selected-planet' : 'orbiting-ellipse'}></div>
          </div>
          <div className="solar-orbit3">
            <div onClick={() => selectProject('3')} className={projectSelected == '3' ? 'selected-planet' : 'orbiting-ellipse'}></div>
          </div>
        </div>
      </div>
      
      <div className="project-container">
        <h3>Click on a planet to view a project</h3>
      </div>
    </div>
  )
}
