import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ props }) => {
  return (
    <main className="articleSection">
      {props.map(article => {
        return <NewsArticle 
          img={article.img}
          headline={article.headline}
          description={article.description}
          url={article.url}
          key={article.id}
        />
      })}
    </main>
  )
}

export default NewsContainer;
