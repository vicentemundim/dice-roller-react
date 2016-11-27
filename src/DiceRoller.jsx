import React from 'react';

const Dice = require('./Dice').default;

export default class DiceRoller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFace: 1,
      rolling: false
    };
  }

  roll() {
    if (this.state.rolling) {
      return;
    }

    this.setState({ rolling: true });

    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(
      () => this.randomizeFace(),
      2000
    );
  }

  randomizeFace() {
    const newFace = Math.floor((Math.random() * 20)) + 1;
    this.setState({ currentFace: newFace, rolling: false });
  }

  render() {
    return (
      <Dice rolling={this.state.rolling} currentFace={this.state.currentFace} onClick={() => this.roll()} />
    );
  }
}
