class Queue{
    constructor(){
        this._queue=[];
        this._length=0;
    }
    enqueue(value){
        this._queue.push(value);
        this._length++;
    }
    dequeue(){
        if(this._length===0){
            return
        }
        this._length--;
        return this._queue.shift();

    }
    peek(){
        return this._queue[0];
    }
}
module.exports={
     Queue:Queue
 };