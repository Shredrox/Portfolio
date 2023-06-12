import React from 'react'

export const ContactSection = ({elRef}) => {
  return (
    <div ref={elRef} className='contact-section'>
        <div className='straight-line-short'></div>
        <div className='curved-line-down'></div>
        <div className='curved-line-up'></div>
        <div className='straight-line-long'></div>
        <div className="meteor">
            
        </div>

        <div className="contact-form">
            <h2>Contact Me</h2>
            <input type="text" className='contact-input' placeholder='Name'/>
            <input type="email" className='contact-input' placeholder='Email'/>
            <textarea type="text" className='contact-input-msg' placeholder='Message' />
            <button className='glow-on-hover' >Send</button>
        </div>
    </div>
  )
}
