import { getsRockPaperScissorsFromNumber } from '../src/get-throw.js';
const test = QUnit.test;


test('rock for 0', assert => {
    const number = 0;
    const expected = 'rock';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});
test('paper for 1', assert => {
    const number = 1;
    const expected = 'paper';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});
test('scissors for 2', assert => {
    const number = 2;
    const expected = 'scissors';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});