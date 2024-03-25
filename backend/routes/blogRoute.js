const express = require('express')
const router = express.Router()
const {fetchBlog,postBlog} = require('../controller/blogController')

router.get('/blog/:name',fetchBlog )
  
// POST request to create a new blog post
router.post('/blog', postBlog)

module.exports = router