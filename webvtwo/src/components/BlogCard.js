import React from 'react';
import './BlogCard.css'

const BlogCard = ({ title, author, date, excerpt, imageUrl, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-meta">
          <span>By {author}</span> - <span>{date}</span>
        </p>
        <p className="blog-card-excerpt">{excerpt}</p>
        <a href={link} className="blog-card-button">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;