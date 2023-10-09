import React from 'react';
import { Link } from 'react-router-dom';

export default function Aside() {
  return (
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
  )
}
