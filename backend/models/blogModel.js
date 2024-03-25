const mongoose = require('mongoose');

// Define the schema for the blog model
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String, // Assuming the image link will be a URL
        required: true
    }
    // You can add more fields as needed
});

// Create the Blog model using the schema
const BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = BlogPost;
