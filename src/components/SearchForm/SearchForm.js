import React from 'react';
import './SearchForm.css';

const SearchForm = ({ searchHandler }) => {
  return (
    <header className='searchForm'>
      <h1>What's<span className='boldTitle'>New?</span></h1>
      <form>
        <input
          id='search'
          type='text' 
          placeholder='Filter Articles by Keyword' 
        />
        <button 
          type='button'
          className='searchButton'
          onClick={() => searchHandler(document.getElementById('search').value)}>Enter
        </button>
      </form>
    </header>
  )
}
export default SearchForm;