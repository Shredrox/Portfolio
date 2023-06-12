import React from 'react'

export const WelcomeSection = ({elRef}) => {
  return (
    <div ref={elRef} className='welcome-section'>
        <h3>Hello there,<br></br> I'm Mihail Shterev</h3>
        <div className="welcome-section-curved-line"/>
        <div className="welcome-section-curved-line-left-up"/>
        <div className="welcome-section-horizonal-line"/>
        <div className='galaxy-container'>
          <div className="orbit">
              <div className="star"></div>
          </div>
          <div className="orbit-2"></div>
          <div className="orbit-3"></div>
          <div className="orbit-4"></div>
        </div>
    </div>
  )
}
