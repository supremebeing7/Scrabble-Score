describe ('scoreForLetter', function() {
  it('returns the score 1 for A', function () {
    scoreForLetter("a").should.equal(1);
  });

  it('returns the score 1 for any one-point letter', function() {
    scoreForLetter("l").should.equal(1);
  });

  it('returns the score 2 for any two-point letter', function() {
    scoreForLetter("d").should.equal(2);
  });

  it('returns the score 3 for any three-point letter', function() {
    scoreForLetter("c").should.equal(3);
  });

  it('returns the score 4 for any four-point letter', function() {
    scoreForLetter("W").should.equal(4);
  });

  it('returns the score 5 for any five-point letter', function() {
    scoreForLetter("K").should.equal(5);
  });

  it('returns the score 8 for any eight-point letter', function() {
    scoreForLetter("j").should.equal(8);
  });

  it('returns the score 10 for any ten-point letter', function() {
    scoreForLetter("Z").should.equal(10);
  });
});

describe('scoreForWord', function() {
  it('returns the Scrabble score for one word', function() {
    scoreForWord("xylophone").should.equal(24);
  });
});
