import React from 'react';

// footer component to prevent duplication
export default function Footer() {
  return (
    <div>
      <Link className="about-Us" to='/about-us'>About the Authors</Link>
      <Link className="home" to='/'>Back to home</Link>
    </div>  
  )
}
