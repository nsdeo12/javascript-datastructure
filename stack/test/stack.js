  'use strict'
  let assert =require('assert');
  let Stack=require('../stack').Stack;

  //describe the test
  describe("Stack",()=>{
      it('perform LIFO', () => {
          var testStk=new Stack();
        

          testStk.push("#/home");
          testStk.push("#/about");
          

          

          assert.equal(testStk.peek(),"#/about");

          
          assert.equal(testStk.pop(),"#/about");
                    
      //    assert.equal(testStk.peek(),"#/home");

          
       //   assert.equal(testStk.pop(),"#/home");

          assert.equal(testStk._length,1);



      });
  })