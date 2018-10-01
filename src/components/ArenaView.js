import React from 'react';
import Cell from './Cell'
var _ = require('lodash');

const ArenaView = (arena) => {
  console.log('arena: ' + arena); 

  const table = new Array(arena.length);
  arena.array.forEach(element, i => {
    var cols = [];
    element.forEach((e, j) =>{
      cols.push(<td><Cell col={j} row={i} isAlive={cell}/></td>);
    });

    table.push(<tr>{cols}</tr>);
  });

  return (
      <div className="overflow-x:auto;">
        <table><tbody>{table}</tbody></table>
      </div>); 

  return (
    <table>
      <tbody>
      <tr>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
      </tr>
      <tr>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
      </tr>
      <tr>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
        <td><Cell/></td>
      </tr>
      </tbody>
    </table>
  );
};


export default ArenaView;