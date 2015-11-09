//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  // null or whitespace-only input
  if (!input || /^\s+$/.test(input)) {
    return 'Fine. Be that way!';
  }

  // input contains at least one character
  if (/[a-zA-Z]/.test(input)) {
    if (input === input.toUpperCase()) {
      return 'Whoa, chill out!';
    }
  }

  // whatever else
  if (input.slice(-1) === '?') {
    return 'Sure.';
  }

  return 'Whatever.';
};

module.exports = Bob;
