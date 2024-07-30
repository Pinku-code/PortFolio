// BlogCard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './BlogCard.css'; // Ensure this file contains the relevant styles

function BlogCard({ title, image, description }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button className="button view-button">View</button>
        <button 
          className="button like-button"
          onClick={handleLike}
        >
          <FontAwesomeIcon 
            icon={faHeart} 
            className={`heart-icon ${liked ? 'filled' : ''} ${liked ? 'animate' : ''}`} 
          />
        </button>
        <span className="like-count">{likeCount} {likeCount === 1 ? 'Likes' : 'Likes'}</span>
      </div>
    </div>
  );
}

export default BlogCard;
