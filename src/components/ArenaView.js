import React from 'react';
import Cell from './Cell'
var _ = require('lodash');

function ArenaView  (props) {
  var arena = props.arena;
  console.log('arena: ' + arena.length); 

  const table = new Array(arena.length);
  for (var i=0; i < arena.length; i++)
  {
    var cols = new Array(arena.length);
    for (var j=0; j < arena[i].length; j++)
    {
      cols[j] =(<td><Cell key={i.toString()+j.toString()} col={i} row={j} isAlive={arena[i][j]} /></td>);
    }
    table[i] = (<tr>{cols}</tr>);

  }

  return (
      <div className="overflow-x:auto;">
        <table><tbody>{table}</tbody></table>
      </div>);
};


export default ArenaView;