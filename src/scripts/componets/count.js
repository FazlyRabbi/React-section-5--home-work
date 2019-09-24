import React from 'react';

const Count = props => {
  const myStyle = {
    backgroundColor: 'tomato',
    borderRadius: '50%',
    color: 'white',
    display: 'inline-block',
    width: '3em',
    height: '2.25em',
    paddingTop: '0.75em',
    textAlign: 'center',
    marginRight: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.5em'
  };
  
  return <p style={myStyle} >{props.Count}</p>;
};

export default Count;
