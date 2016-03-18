'use strict';
function hamming(s, t) {
  if (s.length !== t.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  var count = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== t[i]) {
      ++count;
    }
  }

  return count;
};

module.exports = hamming;
