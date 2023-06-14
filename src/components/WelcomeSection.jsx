import React from 'react'

export const WelcomeSection = ({elRef}) => {
  return (
    <div ref={elRef} className='welcome-section'>
        <div className="welcome-section-container">
          <h1>Hello there,<br></br> I'm Mihail Shterev</h1>
          <div className='galaxy-container'>
            <div className="orbit">
                <div className="star"></div>
            </div>
            <div className="orbit-2"></div>
            <div className="orbit-3"></div>
            <div className="orbit-4"></div>
          </div>
        </div>
        
        <div className="welcome-section-lines-container">
          <div className="welcome-section-curved-line"/>
          <div className="welcome-section-horizonal-line"/>
          <div className="curve-container">
            <div className="point2"></div>
            <div className="welcome-section-curved-line-left-up"/>
          </div>
        </div>
    </div>
  )
}
