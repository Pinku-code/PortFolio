import React from 'react';
import BlogCard from './BlogCard';
import './Styles.css';

function Blog() {
  const blogs = [
    {
      title: "Blog Post 1",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 1."
    },
    {
      title: "Blog Post 2",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 3."
    },
    {
      title: "Blog Post 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 3."
    },
    {
      title: "Blog Post 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 3."
    },
    {
      title: "Blog Post 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 3."
    },
    {
      title: "Blog Post 3",
      image: "https://via.placeholder.com/300",
      description: "This is a short description for blog post 3."
    }
  ];

  return (
    <>
    <h1 className='title'>Blogs</h1>
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <BlogCard 
          key={index}
          title={blog.title}
          image={blog.image}
          description={blog.description}
        />
      ))}
    </div>
    </>
  );
}

export default Blog;
