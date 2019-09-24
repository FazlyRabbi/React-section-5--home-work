import React, { Component } from 'react';
import Count from './count';
import PicLucky from './luckyNum';

export default class Counter extends Component {
  state = {
    count: [40, 45, 90],
    luckyNum: null,
    click: false
  };

  setStates = () => {
    this.setState({
      count: this.state.count.map(() => Math.floor(Math.random() * 100))
    });
  };

  picNum = () => {
    this.setState({
      luckyNum: this.state.count[
        Math.floor(Math.random() * this.state.count.length)
      ],
      click: (this.state.click = true)
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'block' }}>
          {this.state.count.map((count, index) => (
            <Count Count={count} key={index} />
          ))}
        </div>

        <PicLucky
          picLuckyNum={this.picNum}
          lucky={this.state.luckyNum}
          state={this.state}
        />
        <button onClick={this.setStates}>genaret</button>
      </div>
    );
  }
}
