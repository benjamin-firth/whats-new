import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'local',
      local,
      entertainment,
      health,
      science,
      technology
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <button onClick={() => this.setState({ currentPage: 'science' })}>Science News!</button>
        <button onClick={() => this.setState({ currentPage: 'entertainment' })}>Entertainment News!</button>
        <button onClick={() => this.setState({ currentPage: 'health' })}>Health News!</button>
        <button onClick={() => this.setState({ currentPage: 'technology' })}>technology News!</button>
        <button onClick={() => this.setState({ currentPage: 'local' })}>Local News!</button>
        <NewsContainer props={this.state[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
