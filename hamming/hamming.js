'use strict';
let hamming = function(s, t) {
  if (s.length !== t.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  const n = s.length;
  let count = 0;
  for (let i = 0; i < n; ++i) {
    if (s[i] !== t[i]) {
      ++count;
    }
  }

  return count;
};

module.exports = hamming;
