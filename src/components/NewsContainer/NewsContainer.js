import React from 'react';
import './NewsContainer.css'

const NewsContainer = ({ img, headline, description, url }) => {
  return (
    <article>
      <img src={img} alt='Article header background'/>
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Link to Article</a>
    </article>
  )
}

export default NewsContainer;
