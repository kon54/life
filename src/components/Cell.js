import React from 'react';
import styles from './Styles.css';

const Cell = ({isAlive}) => {

    var style = isAlive ? styles.aliveCell : styles.deadCell;

    return (
      <div className={style}>
      </div>
    );
  };

  export default Cell;