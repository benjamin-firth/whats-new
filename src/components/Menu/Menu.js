import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <nav className='navBar'>
      <button onClick={() => this.setState({ currentPage: 'science' })}>Science News!</button>
      <button onClick={() => this.setState({ currentPage: 'entertainment' })}>Entertainment News!</button>
      <button onClick={() => this.setState({ currentPage: 'health' })}>Health News!</button>
      <button onClick={() => this.setState({ currentPage: 'technology' })}>technology News!</button>
      <button onClick={() => this.setState({ currentPage: 'local' })}>Local News!</button>
    </nav>
  )
}

export default Menu;