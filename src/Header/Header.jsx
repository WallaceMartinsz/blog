import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='cabecalho'>
      <div className='titulo'>
          <h1 className='titulo1'>NASSAU</h1>
          <h1 className='titulo2'>BLOG</h1>
      </div>
      <nav className='links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/createpost">Criar Post</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
