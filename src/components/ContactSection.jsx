import React from 'react'
import linkedinIcon from '../assets/linkedinIcon.png'
import githubIcon from '../assets/githubIcon.png'
import spotifyIcon from '../assets/spotifyIcon.png'
import instagramIcon from '../assets/instagramIcon.webp'

export const ContactSection = ({elRef}) => {
  return (
    <div ref={elRef} className='contact-section'>
        <div className='straight-line-short'></div>
        <div className='curved-line-down'></div>
        <div className="contact-section-horizonal-line"></div>

        <div className="contact-form">
            <h2>Contact Me</h2>
            <input type="text" className='contact-input' placeholder='Name'/>
            <input type="email" className='contact-input' placeholder='Email'/>
            <textarea type="text" className='contact-input-msg' placeholder='Message' />
            <button className='glow-on-hover' >Send</button>
        </div>
        <h3>My Links: 
          <a href="https://www.linkedin.com/in/mihail-shterev-92b149254/" target='_blank'>
            <img  src={linkedinIcon} alt="" />
          </a>
          <a href="https://github.com/Shredrox" target='_blank'>
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://open.spotify.com/artist/5x0JssU826Vd1fIz7scsPu?si=D9hg61oVS-WuVgWIxm5MTQ" target='_blank'>
            <img src={spotifyIcon} alt="" />
          </a>
          <a href="https://www.instagram.com/xthatmikey/" target='_blank'>
            <img src={instagramIcon} alt="" />
          </a>
        </h3>
    </div>
  )
}
