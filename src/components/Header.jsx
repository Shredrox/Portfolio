import React from 'react'

export const Header = ({scroll, aboutMeRef}) => {
  return (
    <div>
      <ul className='header'>
        <li><button onClick={() => scroll(aboutMeRef)}>About Me</button></li>
        <li>Projects</li>
      </ul>
    </div>
  )
}
