import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  const {title, copy} = props;

  return (
    <div className='footer'>
      <p>I am the {title}</p>
      <p>Copy notice: {copy}</p>
    </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired
}

export default Footer;