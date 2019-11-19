import React from 'react';
import './NewsContainer.css'

const NewsContainer = ({ img, headline, description, url }) => {
  return (
    <article className="articleBox">
      <img src={img} alt='Article header background' className="articlePic"/>
      <h3>{headline}</h3>
      <hr/>
      <p>{description}</p>
      <a href={url}>Link to Article</a>
    </article>
  )
}

export default NewsContainer;
