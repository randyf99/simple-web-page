import React from 'react';

function Header(props) {
  return (
    <div className='header'>
      <p>I am a {props.title}!!</p>
    </div>
  );
}

export default Header;