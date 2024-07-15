import React from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

function BlogCard({ title, image, description }) {
  return (
    <>
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogCard;
