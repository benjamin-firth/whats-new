import React from 'react';
import './Menu.css'

const Menu = ({ clickHandler }) => {
  return (
    <nav className='navBar'>
      <button id='science' onClick={clickHandler}>Science</button>
      <button id='entertainment' onClick={clickHandler}>Entertainment</button>
      <button id='health' onClick={clickHandler}>Health</button>
      <button id='technology' onClick={clickHandler}>Technology</button>
      <button id='local' onClick={clickHandler}>Local</button>
    </nav>
  )
}

export default Menu;