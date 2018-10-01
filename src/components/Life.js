import React from 'react';
import Cell from './Cell'
import AV from './ArenaView'

const CreateArena = (d) => {
  var arr = new Array(d);

  for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(d);
    for(var j = 0; j < arr[i].length; j++) {
        arr[i][j] = false;
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