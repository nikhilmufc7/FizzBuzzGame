var fizzString = 'fizz';
var buzzString = 'buzz';
var fizzBuzzString = 'fizzbuzz';

function getFizzBuzzValue(num) {
  var val = num;
  if (num % 15 === 0) {
    val = fizzBuzzString;
  } else if (num % 5 === 0) {
    val = buzzString;
  } else if (num % 3 === 0) {
    val = fizzString;
  }
  return val;
}

function makeFizzBuzzArray(num) {
  var result = [];
  for (var i=1; i<=num; i++) {
    result.push(getFizzBuzzValue(getFizzBuzzValue(i)));
  }
  return result;
}

function doFizzBuzz(num) {
  var fizzBuzzArray = makeFizzBuzzArray(num);
  fizzBuzzArray.forEach(function(item) {
      var newElem = $(
        '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
      if (item === fizzString || item === buzzString || item === fizzBuzzString) {
        newElem.addClass(item);
      }
      $(".js-results").append(newElem);
  })
}


function handleFormSubmit() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    // in case there's already results
    $(".js-results").empty();
    var choice = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
    doFizzBuzz(choice);
  });
}

$(function() {
  handleFormSubmit();
});
