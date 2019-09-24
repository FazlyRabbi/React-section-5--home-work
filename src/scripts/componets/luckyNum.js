import React from 'react';

const PicLucky = props => {
  return (
    <>
      {props.state.click && <p>your lucky number : {props.lucky}</p>}
      <button onClick={props.picLuckyNum}>pic</button>
    </>
  );
};

export default PicLucky;
