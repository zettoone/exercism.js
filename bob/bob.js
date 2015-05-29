//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (!input) {
    return 'Fine. Be that way!';
  }

  var lastChar = input.slice(-1);
  if (lastChar === '!') {
    return 'Whoa, chill out!';
  }
  if (lastChar === '?') {
    return 'Sure.'
  }

  return 'Whatever.';
//
// YOUR CODE GOES HERE
//
};

module.exports = Bob;
