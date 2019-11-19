import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ props }) => {
  const newsArticles = props.map(article => {
    return <NewsArticle 
      img={article.img}
      headline={article.headline}
      description={article.description}
      url={article.url}
      key={article.id}
    />
  })

  return (
    <main className="articleSection">
      {newsArticles}
    </main>
  )
}

export default NewsContainer;
