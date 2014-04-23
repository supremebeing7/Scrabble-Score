var scoreForWord = function(word) {
  var score = 0;
  word.split("").forEach(function(letter) {
    score += scoreForLetter(letter);
  })

  return score;
}

var scoreForLetter = function(letter) {

  var letterLowerCase = letter.toLowerCase();  
  var letterScore = {
    0:[1,2,3,4,5,8,10],
    1:["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"], 
    2:["d", "g"],
    3:["b", "c", "m", "p"],
    4:["f", "h", "v", "w", "y"],
    5:["k"],
    6:["j", "x"],
    7:["q", "z"]
  };

  for (var j = 1; j < 8; j++) {
    for (var i = 0; i < letterScore[j].length; i++) {
      if (letterScore[j][i] === letterLowerCase) {
        return letterScore[0][j-1];
      }
    }
  };
};

$(document).ready(function() {
  $('#scrabble-score').submit(function(event) {
    var scrabbleWord = ($('input#scrabble-word').val());
    var result = scoreForWord(scrabbleWord);


    $('#result').show();
    $('.score').text(result);
    $('#scrabble-word-input').text(scrabbleWord);
    this.reset();
    event.preventDefault();
  })
})
