'use strict'
class Mean{
  constructor(){
    this.mean=[];
    let x,y,z,p=0;
  }
  result(x,y,z,p){
    return (x+y+z+p)/4;

  }
}

module.exports={
  Mean:Mean
}