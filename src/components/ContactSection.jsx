import React from 'react'
import linkedinIcon from '../assets/linkedinIcon.png'
import githubIcon from '../assets/githubIcon.png'
import spotifyIcon from '../assets/spotifyIcon.png'
import instagramIcon from '../assets/instagramIcon.webp'

export const ContactSection = ({elRef}) => {
  return (
    <div ref={elRef} className='contact-section'>
        <form action="https://formsubmit.co/74fe684c8f1aa031c582f96066ec3486" method="POST" className="contact-form">
            <h2>Contact Me</h2>
            <div className="input-container">
              <input type="text" name='name' className='contact-input' placeholder='Name' required/>
              <input type="email" name='email' className='contact-input' placeholder='Email' required/>
            </div>
            <textarea type="text" name='message' className='contact-input-msg' placeholder='Message' required/>
            <button type='submit' className='glow-on-hover' >Send</button>
        </form>
        <h3>My Links: 
          <div className="links-container">
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
          </div>
        </h3>
    </div>
  )
}
