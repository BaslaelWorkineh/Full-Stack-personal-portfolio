import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogDetail from './Pages/BlogDetail';
import BlogList from './Pages/BlogList';

import './components/assets/css/bootstrap.min.css';
import './components/assets/css/main.css';
import './components/assets/css/responsive.css';
import NotFound from './Pages/NotFound';

function App() {

  const blogPosts = [
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },
    {
      id: 1, // Add a unique identifier for each post
      title: 'Awesome Tips for Taking Breathtaking Travel Photos',
      author: 'Sarah Wanderlust',
      date: 'March 26, 2024',
      excerpt: 'Learn practical tips to elevate your travel photography and bring your adventures to life!',
      imageUrl: 'https://www.investopedia.com/thmb/pevv6dw9Hn-DK8L2tUmmyLXvcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CryptoSpotlight-Recirc2-52a72e7b82124c83b1818c6f4fa14344.jpg', // Replace with a placeholder image URL
      link: '/blog/travel-photography-tips', // Replace with a link to the full blog post
    },

    // Add more blog post objects here following the same structure
  ];


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList blogPosts={blogPosts}/>} />
        <Route path="/blog/:name" element={<BlogDetail />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
