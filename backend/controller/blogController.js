const BlogPost = require("../models/blogModel")

const fetchBlog = async (req, res) => {
    const name = req.params.name;
    try {
      const blogPost = await BlogPost.findOne({ name: name });
      if (!blogPost) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      res.json(blogPost);
    } catch (error) {
      console.error('Error retrieving blog post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const postBlog = async (req, res) => {
    const { name, content, imageUrl } = req.body;

    try {
      const newBlogPost = new BlogPost({ name, content, imageUrl });

      const savedBlog = await newBlogPost.save();
      res.status(201).json(savedBlog);
    } catch (error) {
      console.error('Error creating blog post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {postBlog, fetchBlog}