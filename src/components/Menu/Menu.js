import React from 'react';
import './Menu.css'

const Menu = ({ clickHandler }) => {
  return (
    <nav className='navBar'>
      <button id='science' onClick={event => clickHandler(event)}>Science News!</button>
      <button id='entertainment' onClick={event => clickHandler(event)}>Entertainment News!</button>
      <button id='health' onClick={event => clickHandler(event)}>Health News!</button>
      <button id='technology' onClick={event => clickHandler(event)}>Technology News!</button>
      <button id='local' onClick={event => clickHandler(event)}>Local News!</button>
    </nav>
  )
}

export default Menu;