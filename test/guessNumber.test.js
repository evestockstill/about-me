import guessNumber from '../src/guessnumber.js';

const test = QUnit.test;

test('returns true', (assert) => {
    // Arrange
    const number = '6';
    const expected = 'true';

    // Act
    const result = guessNumber(number);

    // Assert
    assert.equal(result, expected);
});
