import React, { Component } from 'react';

export default class CounterAlt extends Component {
  state = {
    count: this.props.count,
    counting: false
  };

  handleClick = number => () => {
    this.setState({
      count: this.state.count + number
    });
  };

  handleDecrement = number => () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  handleReset = number => () => {
    this.setState({
      count: (this.state.count = 0)
    });
  };

  render() {
    return (
      <div style={this.myStyle} className='scoreWrapper'>
        <h3>
          {this.state.counting ? 'you are counting' : 'your are not counting'}
        </h3>
        <button style={this.btnStyle} onClick={this.handleClick(5)}>
          increase
        </button>
        <button style={this.btnStyle} onClick={this.handleDecrement()}>
          decrement
        </button>
        <button style={this.btnStyle} onClick={this.handleReset()}>
          reset
        </button>
        <p>Count : {this.state.count}</p>
      </div>
    );
  }
}
