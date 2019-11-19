import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'local',
      local,
      entertainment,
      health,
      science,
      technology,
    }
  }

  changeCurrentPage = (event) => {
    this.setState({ 
      local,
      entertainment,
      health,
      science,
      technology,
      currentPage: event.target.id })
  }

  filterSearches = (searchValue) => {
    const searchedArticles = this.state[this.state.currentPage].filter(article => {
      return article.description.includes(searchValue)
    });
    this.setState({ [this.state.currentPage]: searchedArticles })
  }

  render () {
    return (
      <div className="app">
        <SearchForm searchHandler={this.filterSearches}/>
        <Menu clickHandler={event => this.changeCurrentPage(event)}/>
        <NewsContainer props={this.state[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
