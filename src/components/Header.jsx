import React from 'react'

export const Header = ({scroll, aboutMeRef, projectsRef}) => {
  return (
    <div>
      <ul className='header'>
        <li><button onClick={() => scroll(aboutMeRef)}>About Me</button></li>
        <li><button onClick={() => scroll(projectsRef)}>Projects</button></li>
      </ul>
    </div>
  )
}
