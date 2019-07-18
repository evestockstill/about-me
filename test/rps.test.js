import { getsRockPaperScissorsFromNumber } from '../src/get-throw.js';
const test = QUnit.test;


test('rock for less than 0.33', assert => {
    const number = .01;
    const expected = 'rock';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});
test('paper for less than 0.33', assert => {
    const number = .75;
    const expected = 'paper';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});
test('scissors for less than 0.33', assert => {
    const number = .33;
    const expected = 'scissors';
    const rpc = getsRockPaperScissorsFromNumber(number);
    assert.equal(rpc, expected);
});