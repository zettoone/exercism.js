'use strict';
let isLeapYear = (year) => {
  let hasFactor = (n) => {
    return year % n === 0;
  };

  return hasFactor(4) && (!hasFactor(100) || hasFactor(400));
};

module.exports = isLeapYear;
