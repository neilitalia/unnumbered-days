import React from 'react';
import './Logo.scss';
import icon from '../svg/today-24px.svg';

function Logo() {
  return (
    <div className="Logo">
      <div className="app-icon">
        <img src={icon} alt="calendar icon"/>
      </div>
      <h1 className="unnumbered-text">unnumbered</h1>
      <h1 className="days-text">days</h1>
    </div>
  )
}

export default Logo;