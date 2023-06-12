import React from 'react'
import { motion, transform } from 'framer-motion'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react.png'
import csharpImg from '../assets/csharp.png'
import dotnetImg from '../assets/dotnet.jpg'

export const AboutMeSection = ({elRef}) => {
  
  return (
    <div ref={elRef} className='about-me'>
      <div className='straight-line-short'></div>
      <div className='curved-line-down'></div>
      <div className='curved-line-up'></div>
      <div className='straight-line-long'></div>
      <div 
        className='about-me-text'>
        <h2> <div className="point"/>About Me</h2>
        <p>
          Hi, my name's Mihail Shterev. I'm a Computer Science student at the Technical University of Sofia, Bulgaria.
          I have a passion for computers, how they work and how i can use them in interesting ways to do cool stuff.
          I'm eager to learn and to always improve my programming skills. I'm currently learning web development.
        </p>
      </div>

      <div className='about-me-stack'>
        <h2>Tech Stack</h2>
        <h4>Front End</h4>
        <div className='tech-stack'>
          <img src={htmlImg} alt="" />
          <img src={cssImg} alt="" />
          <img src={jsImg} alt="" />
          <img src={reactImg} alt="" />
        </div>
        <h4>Back End</h4>
        <div className='tech-stack'>
          <img src={csharpImg} alt="" />
          <img src={dotnetImg} alt="" />
        </div>
      </div>
    </div>
  )
}
