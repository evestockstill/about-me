import compareNumbers from '../src/guessnumber.js';

const test = QUnit.test;

test('compare numbers returns 0 when numbers are equal', (assert) => {
    // Arrange
    const guess = 6;
    const correctNumber = 6;
    const expected = 0;

    // Act
    const result = compareNumbers(guess, correctNumber);

    // Assert
    assert.equal(result, expected);
});

test('compare numbers returns -1 when guessed number too low', (assert) => {
    // Arrange
    const guess = 0;
    const correctNumber = 6;
    const expected = -1;

    // Act
    const result = compareNumbers(guess, correctNumber);

    // Assert
    assert.equal(result, expected);
});
