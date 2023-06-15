import React from 'react'
import mIcon from '../assets/favicon.ico'
import { FaBars, FaDribbble }  from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { NavBar } from './NavBar';

export const Header = ({scroll, homeRef, aboutMeRef, projectsRef, contactsRef}) => {
  const [burgirVisible, setBurgirVisible] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleBurgir = () => {
    setBurgirVisible(!burgirVisible);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div>
      <div className='header'>
        <img src={mIcon} alt="" />
        {windowWidth > 660 ? 
        <ul>
          <li><button onClick={() => scroll(homeRef)}>Home</button></li>
          <li><button onClick={() => scroll(aboutMeRef)}>About Me</button></li>
          <li><button onClick={() => scroll(projectsRef)}>Projects</button></li>
          <li><button onClick={() => scroll(contactsRef)}>Contact</button></li>
        </ul> 
        :
        <FaBars className='burgir' onClick={toggleBurgir}/> 
        }
        
      </div>
      {burgirVisible && windowWidth < 660 &&
        <NavBar scroll={scroll} elRefs={[homeRef, aboutMeRef, projectsRef, contactsRef]}/>
      }
    </div>
  )
}
