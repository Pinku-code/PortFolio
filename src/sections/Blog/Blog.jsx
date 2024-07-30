// Blog.js
import React from 'react';
import BlogCard from './BlogCard';
import './Styles.css'; // Assuming you have some styles for Blog component

function Blog() {
  const blogs = [
    {
      title: "Blog Post 1",
      image: "https://random.imagecdn.app/300/290",
      description: "This is a short description for blog post 1."
    },
    {
      title: "Blog Post 2",
      image: "https://random.imagecdn.app/300/291",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 3",
      image: "https://random.imagecdn.app/300/292",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 4",
      image: "https://random.imagecdn.app/300/293",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 5",
      image: "https://random.imagecdn.app/300/294",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 6",
      image: "https://random.imagecdn.app/300/295",
      description: "This is a short description for blog post 2."
    },
    {
      title: "Blog Post 7",
      image: "https://random.imagecdn.app/300/296",
      description: "This is a short description for blog post 2."
    },
   
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
