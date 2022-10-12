import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='header-design'>
      <h3>Easy Quiz</h3>
      <div className='nav-design'>
        <Link to="/topics">Topics</Link>
        <Link to="/statistics">Statics</Link>
        <Link to="/blog">Blog</Link>    
      </div>
    </div>
   
  );
};

export default Header;