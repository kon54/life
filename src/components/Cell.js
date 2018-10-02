import React from 'react';
import styles from './Styles.css';
var seal = require('../assets/seal.gif');

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {col: props.col, row: props.row, isAlive: props.isAlive};
    this.handleClick = this.handleClick.bind(this)
  }
  
  render() {
    var style = this.state.isAlive ? styles.aliveCell : styles.deadCell;
    return (<div className={style} onClick={this.handleClick}> </div>);
  }

  handleClick() {
    this.setState((state, props)=>({ isAlive: !state.isAlive }));
  }
}

export default Cell;