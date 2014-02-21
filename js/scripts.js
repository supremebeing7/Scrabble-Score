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





//   var letterLowerCase = letter.toLowerCase();
//   var onePointLetters = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
//   var twoPointLetters = ["d", "g"];
//   var threePointLetters = ["b", "c", "m", "p"];
//   var fourPointLetters = ["f", "h", "v", "w", "y"];
//   var fivePointLetter = ["k"];
//   var eightPointLetters = ["j", "x"];
//   var tenPointLetters = ["q", "z"];

//   for (var i = 0; i < onePointLetters.length; i++) {
//     if (letterLowerCase === onePointLetters[i]) {
//       return 1;
//     }
//   }

//   for (var j = 0; j < twoPointLetters.length; j++) {
//     if (letterLowerCase === twoPointLetters[j]) {
//       return 2;
//     }
//   }

//   for (var k = 0; k < threePointLetters.length; k++) {
//     if (letterLowerCase === threePointLetters[k]) {
//       return 3;
//     }
//   }

//   for (var k = 0; k < fourPointLetters.length; k++) {
//     if (letterLowerCase === fourPointLetters[k]) {
//       return 4;
//     }
//   }

//   for (var i = 0; i < fivePointLetter.length; i++) {
//     if (letterLowerCase === fivePointLetter[i]) {
//       return 5;
//     }
//   }

//   for (var i = 0; i < eightPointLetters.length; i++) {
//     if (letterLowerCase === eightPointLetters[i]) {
//       return 8;
//     }
//   }

//   for (var i = 0; i < tenPointLetters.length; i++) {
//     if (letterLowerCase === tenPointLetters[i]) {
//       return 10;
//     }
//   }
// };
