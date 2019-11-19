import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
    this.newsArticle = this.state.local.map(article => {
      return <NewsContainer 
        img={article.img}
        headline={article.headline}
        description={article.description}
        url={article.url}
        key={article.id}
      />
    })
  }

  render () {
    return (
      <div className="app">
        {this.newsArticle}
      </div>
    );
  }
}

export default App;
