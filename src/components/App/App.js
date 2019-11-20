import React, { Component } from 'react';
// import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'local',
      // local,
      // entertainment,
      // health,
      // science,
      // technology,
      allData: {
        local: []
      }
    }
  }

  changeCurrentPage = (event) => {
    this.setState({ currentPage: event.target.id })
  }

  filterSearches = (searchValue) => {
    const searchedArticles = this.state.allData[this.state.currentPage].filter(article => {
      return article.description.includes(searchValue)
    });
    this.setState({ 
      allData: {
        ...this.state.allData,
        filteredData: searchedArticles
      },
      currentPage: 'filteredData',
    })
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
    .then(data => this.setState({allData: data}))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="app">
        <SearchForm searchHandler={this.filterSearches}/>
        <Menu clickHandler={event => this.changeCurrentPage(event)}/>
        <NewsContainer props={this.state.allData[this.state.currentPage]} />
      </div>
    );
  }
}

export default App
