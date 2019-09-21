import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Content = props => {
  const myStyle = {
    background: '#EB6F7C',
    color: '#fff',
    padding: '30px',
    width: '70%',
    float: 'left',
    height: '700px',
    textAlign: 'center',
    textTransform: 'uppercase'
  };
  return (
    <div className='content' style={myStyle}>
      <h3>{props.contentText}</h3>
    </div>
  );
};
Content.defaultProps = {
  contentText: 'content'
};
Content.propTypes = {
  contentText: PropTypes.string.isRequired
};
export default Content;
