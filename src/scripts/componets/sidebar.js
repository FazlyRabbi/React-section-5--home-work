import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
  const myStyle = {
    background: '#BC6A83',
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    height: '700px',
    textTransform: 'uppercase'
  };
  return (
    <div className='sidebar' style={myStyle}>
      <h3>{props.contentText}</h3>
    </div>
  );
};

Sidebar.defaultProps = {
  contentText: 'sidebar'
};
Sidebar.propTypes = {
  contentText: PropTypes.string.isRequired
};

export default Sidebar;
