'use strict'


class Stack{
    constructor(){
        this._stack=[];
        this._length=0;
        
        
    }

    push(value){
        this._stack.push(value);
        this._length++;
        
    }

    pop(){
        if(this._length===0){
            return
        }
        this._length--;
        return this._stack.pop();
    }
    peek()
    {
        return this._stack[this._length-1];
    }
}

var test=new Stack();
test.push(33);
var x=JSON.parse(test);
console.log(x,"<<==stack")
module.exports={
    Stack:Stack
}