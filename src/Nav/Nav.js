import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/savegame'}>Save Game</Link>
      </nav>
    </div>
  );
}
