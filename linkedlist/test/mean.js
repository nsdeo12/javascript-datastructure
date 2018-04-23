'use strict'
let assert = require('assert');
let mean = require('../mean').Mean;


let m = new mean();

describe("mean", () => {

    it('returns mean', () => {
        assert.equal(m.result(4, 5, 6, 5), 5);
        console.log(m.result(4,5,6,5));
    });
})