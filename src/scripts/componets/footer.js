import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const myStyle = {
    background: '#6A597C',
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    textTransform: 'uppercase'
  };
  return (
    <div className='footer' style={myStyle}>
      <h3>{props.contentText}</h3>
    </div>
  );
};

Footer.defaultProps = {
  contentText: 'footer'
};
Footer.propTypes = {
  contentText: PropTypes.string.isRequired
};

export default Footer;
