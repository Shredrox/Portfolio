import React from 'react'

export const Header = ({scroll, homeRef, aboutMeRef, projectsRef, contactsRef}) => {
  return (
    <div>
      <ul className='header'>
        <li><button onClick={() => scroll(homeRef)}>Home</button></li>
        <li><button onClick={() => scroll(aboutMeRef)}>About Me</button></li>
        <li><button onClick={() => scroll(projectsRef)}>Projects</button></li>
        <li><button onClick={() => scroll(contactsRef)}>Contact</button></li>
      </ul>
    </div>
  )
}
