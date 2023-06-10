import React from 'react'

export const AboutMeSection = ({refe}) => {
  return (
    <div ref={refe} className='about-me'>
      <div className='about-me-text'>
        <h2>About Me</h2>
        <p>
          Hi, my name's Mihail Shterev. I'm a Computer Science student at the Technical University of Sofia, Bulgaria.
          I have a passion for computers, how they work and how i can use them in interesting ways to do cool stuff.
          I'm eager to learn and to always improve my programming skills. I'm currently learning web development.
        </p>
      </div>
    </div>
  )
}
