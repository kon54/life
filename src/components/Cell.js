import React from 'react';
import styles from './Styles.css';
var seal = require('../assets/seal.gif');

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {col: props.col, row: props.row, isAlive: props.isAlive};
  }
  
  render() {
    var style = this.state.isAlive ? styles.aliveCell : styles.deadCell;
    return (<div className={style}>[{this.state.col}][{this.state.row}]</div>);
  }

  handleOnClick(params) {
    console.log('Clicked!');
  }
}

export default Cell;