import React from 'react';
import Cell from './Cell'

const Life = () => {
  return (
    <div>
      <Grid dim={5}/>
    </div>
  );
};

function CreatGrid(dim, val){
//  var array = Array.apply(null, Array(dim)).map(()=>  new Array(dim));
//  return array.map((e) => e.map((ee) => val));
}

function makeArray(d, val) {
  var arr = [];
  for(var i = 0; i < d; i++) {
      arr.push(fillArrayWithVal(d, val));
  }
  return arr;
}

function fillArrayWithVal(n, val) {
  var arr = Array.apply(null, Array(n));
  return arr.map(() => { return val });
}

const Grid = (dim) => {

  var grid = makeArray(dim, "1");
 
  return (<div>{grid}</div>);

};

export default Life;
