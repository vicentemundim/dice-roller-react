import React from 'react';
import styles from './Dice.scss';

const DiceFace = require('./DiceFace').default;

export default class Dice extends React.Component {
  constructor(props) {
    super(props);

    const faceNumbers = Array(20).fill(null).map((v, i) => i + 1);

    this.faces = faceNumbers.map((number) =>
      <DiceFace key={number.toString()} value={number} />
    );
  }

  render() {
    const currentFaceStyle = styles[`currentFace${this.props.currentFace}`];
    let classNames = [styles.dice];

    classNames.push(this.props.rolling ? styles.rolling : currentFaceStyle);

    return (
      <div className={styles.diceContainer} onClick={() => this.props.onClick && this.props.onClick()}>
        <div className={classNames.join(' ')}>
          {this.faces}
        </div>
      </div>
    );
  }
}

Dice.propTypes = {
  currentFace: React.PropTypes.number.isRequired,
  rolling: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};
