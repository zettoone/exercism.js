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

function stringMap(fn) {
  return (str) => {
    return str.split('').map(fn).join('');
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
  var transcribeForDna = (x) => {
    return transcribeNucleotide(true)(x);
  };
  return stringMap(transcribeForDna)(dna);
};

DnaTranscriber.prototype.toDna = function(rna) {
  var transcribeForRna = (x) => {
    return transcribeNucleotide(false)(x);
  };
  return stringMap(transcribeForRna)(rna);
};

module.exports = DnaTranscriber;
