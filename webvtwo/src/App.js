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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:name" element={<BlogDetail />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
