import React from 'react';
import styles from './DiceFace.scss';

export default class DiceFace extends React.Component {
  render() {
    const faceStyle = styles[`diceFace${this.props.value}`];
    const classNames = [styles.diceFace, faceStyle].join(' ');

    return (
      <figure className={classNames} data-value={this.props.value}></figure>
    );
  }
}

DiceFace.propTypes = {
  value: React.PropTypes.number.isRequired,
};
