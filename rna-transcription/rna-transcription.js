'use strict';
let DnaTranscriber = function() {};

function transcribeNucleotide(isDna) {
  const mapping = {
    G: 'C',
    C: 'G',
    A: isDna ? 'U' : 'T',
    T: 'A',
    U: 'A'
  };

  return (input) => {
    return mapping[input];
  };
}

const stringMap = (fn) => {
  return (str) => {
    return str.split('').map(fn).join('');
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
  return stringMap((x) => {
    return transcribeNucleotide(true)(x);
  })(dna);
};

DnaTranscriber.prototype.toDna = function(rna) {
  return stringMap((x) => {
    return transcribeNucleotide(false)(x);
  })(rna);
};

module.exports = DnaTranscriber;
