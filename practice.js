var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else if (number >= 1 && number % 1 === 0) {
    return number * factorial(number -1);
  } else {
  return false;
  };
};


$(document).ready(function() {
  $('form#factorials').submit(function(event) {
    var numbers = ($('input#numbers').val());
    var result = factorial(numbers);

    $('#result').show();
    $('.results').text(result);
    this.reset();
    event.preventDefault();
  });
});





// $(document).ready(function() {
//   $("").submit(function(event) {
//     var phrase = $('input#phrase').val();

//     var newPhrase = titleCase(phrase);

//     $(".finalResult").text(newPhrase);
//     $("#finalResult").show();
//     this.reset();
//     event.preventDefault();
//   });
// });




//SPECS
describe('factorial', function() {
  it('makes 0 factorial equal to 1', function() {
    factorial(0).should.equal(1);
  });

  it('computes factorial of a number using recursion', function() {
    factorial(10).should.equal(3628800);
  });

  it('Gives error when trying to compute factorial of a negative number using recursion', function() {
    factorial(-1).should.equal(false);
  });

  it('Return false if given a decimal', function() {
    factorial(1.5).should.equal(false);
  })
});


