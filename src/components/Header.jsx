import React from 'react'
import mIcon from '../assets/favicon.ico'

export const Header = ({scroll, homeRef, aboutMeRef, projectsRef, contactsRef}) => {
  return (
    <div>
      <div className='header'>
        <img src={mIcon} alt="" />
        <ul>
          <li><button onClick={() => scroll(homeRef)}>Home</button></li>
          <li><button onClick={() => scroll(aboutMeRef)}>About Me</button></li>
          <li><button onClick={() => scroll(projectsRef)}>Projects</button></li>
          <li><button onClick={() => scroll(contactsRef)}>Contact</button></li>
        </ul>
      </div>
    </div>
  )
}
