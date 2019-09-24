import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const myStyle = {
    background: '#F2AE8B',
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    textTransform: 'uppercase'
  };
  return (
    <div className='header' style={myStyle}>
      <h3>{props.contentText}</h3>
    </div>
  );
};

Header.defaultProps = {
  contentText: 'header'
};

Header.propTypes = {
  contentText: PropTypes.string.isRequired
};

export default Header;
