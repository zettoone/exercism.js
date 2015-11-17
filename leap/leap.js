var IsLeapYear = function(year) {
  var has_factor = function(n) {
    return year % n === 0;
  };

  return has_factor(4) && (!has_factor(100) || has_factor(400));
};

module.exports = IsLeapYear;
