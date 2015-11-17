'use strict';
let isLeapYear = function(year) {
  let hasFactor = function(n) {
    return year % n === 0;
  };

  return hasFactor(4) && (!hasFactor(100) || hasFactor(400));
};

module.exports = isLeapYear;
