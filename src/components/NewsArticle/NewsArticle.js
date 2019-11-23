import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';

const NewsArticle = ({ img, headline, description, url }) => {
  return (
    <article className="articleBox">
      <img src={img} alt='Article header background' className="articlePic"/>
      <h3>{headline}</h3>
      <hr/>
      <p>{description}</p>
      <a href={url}>
        <div className='articleLink'>
          <h4>Link to Article</h4>
        </div>
      </a>
    </article>
  )
}

NewsArticle.propTypes = {
  img: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}
export default NewsArticle;