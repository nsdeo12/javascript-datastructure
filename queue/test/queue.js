'use strict';

let assert = require('assert');
let queue = require('../queue').Queue;

describe('Queue', () => {
    it('should FIFO', () => {
        let q=new queue();
        q.enqueue('test-en1');

        q.enqueue('test-en2');

        assert.equal(q.dequeue(), 'test-en1');
        assert.equal(q.dequeue(),'test-en2');

        assert.equal(q._length, 0);

    });
})