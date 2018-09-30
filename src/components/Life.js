import React from 'react';
import Cell from './Cell'
import AV from './ArenaView'

const CreateArena = (d) => {
  var arr = [];

  for(var i = 0; i < d; i++) {
    arr.push([]);
    for(var j = 0; j < d; j++) {
        arr[i].push(false);
    }
  } 

  console.log('arr  :'+arr);
  return arr;
};

const Life = () => {
  const myArena = CreateArena(5);
  
  return (<AV arena={myArena}/>);
};

export default Life;
/* 

<div className="overflow-x:auto;">
    <table>
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
    </table>
    </div> */