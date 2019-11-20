import React from 'react';
import './Menu.css'

const Menu = ({ clickHandler }) => {
  return (
    <nav className='navBar'>
      <button id='science' onClick={event => clickHandler(event)}>Science</button>
      <button id='entertainment' onClick={event => clickHandler(event)}>Entertainment</button>
      <button id='health' onClick={event => clickHandler(event)}>Health</button>
      <button id='technology' onClick={event => clickHandler(event)}>Technology</button>
      <button id='local' onClick={event => clickHandler(event)}>Local</button>
    </nav>
  )
}

export default Menu;