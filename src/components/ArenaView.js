import React from 'react';
import Cell from './Cell'
var _ = require('lodash');

const ArenaView = (arena) => {
  console.log('arena: ' + arena); 
  const table =  _.map(arena, (rows, i)=>{
     console.log('rows: ' + rows); 
    const cols = _.map(rows, (cell, j)=>{
      console.log('cell: ' + cell + ' j:'+j);
        return (<td><Cell col={i} row={j} isAlive={cell}/></td>);
      });

      return (<tr>{cols}</tr>);
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