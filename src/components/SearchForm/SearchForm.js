import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <header className='searchForm'>
      <h1>What's New!?</h1>
      <input type='text' placeholder='Search Articles by Keyword'/>
      <button className='searchButton'>Enter</button>
    </header>
  )
}
export default SearchForm;