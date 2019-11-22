import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'local',
      allData: {
        local: []
      }
    }
  }

  changeCurrentPage = (event) => {
    this.setState({ currentPage: event.target.id })
  }

  searchHandler = (searchValue) => {
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

  render() {
    return (
      <div className="app">
        <SearchForm searchHandler={this.searchHandler}/>
        <Menu clickHandler={event => this.changeCurrentPage(event)}/>
        <NewsContainer props={this.state.allData[this.state.currentPage]} />
      </div>
    );
  }
}

export default App
