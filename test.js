const expect = require('chai').expect;
const exercise = require('./exercise');

describe('Stacks test', () => {
  it('should pass test #1', () => {
    const input = [
      '1 14',
      '3'
    ];

    expect(exercise(input)).to.deep.equal([
      '14'
    ]);
  });

  it('should pass test #2', () => {
    const input = [
      '1 42',
      '2',
      '1 14',
      '3',
      '1 28',
      '3',
      '1 60',
      '1 78',
      '2',
      '2'
    ];

    expect(exercise(input)).to.deep.equal([
      '14',
      '14'
    ]);
  });
});
