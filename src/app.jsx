import './index.scss';
import React from 'react';

const DiceRoller = require('./DiceRoller').default;

export default class App extends React.Component {
  render() {
    return (
      <DiceRoller />
    )
  }
}
