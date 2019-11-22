import React, { Component } from 'react';
import './SearchForm.css';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyword: ''
    };
  }

  handleChange = (event) => {
    this.setState({ keyword: event.target.value })
  }

  render() {
    return (
      <header className='searchForm'>
        <h1>What's<span className='boldTitle'>New?</span></h1>
        <form>
          <input
            id='search'
            type='text' 
            placeholder='Filter Articles by Keyword'
            onChange={this.handleChange}
          />
          <button 
            type='button'
            className='searchButton'
            onClick={() => this.props.searchHandler(this.state.keyword)}>Enter
          </button>
        </form>
      </header>
    )
  }
}
export default SearchForm;