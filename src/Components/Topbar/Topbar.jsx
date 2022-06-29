import React from 'react';

//stylesheet
import './Topbar.scss';

//image files
import avatarImage from './Assests/bg.jpg';
import brandLogo from './Assests/logo.png';

function Topbar() {
  return (
    <div className='topbar-container'>
        <div className='topbar-container__brand-logo'>
            <img src={brandLogo} alt='hello-AR' />
            <p>my application</p>
            <div className='down-arrow'></div>
        </div>
        <div className='topbar-container__user'>
            <img src={avatarImage} alt='user-avatar' />
            <h4>barde ridel</h4>
            <div className='down-arrow'></div>
        </div>
    </div>
  )
}

export default Topbar