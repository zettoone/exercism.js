'use strict';

let DnaTranscriber = function() {};

function transcribeNucleotide(isDna) {
  let mapping = {
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

DnaTranscriber.prototype.toRna = function(dna) {
  let transcriber = transcribeNucleotide(true);
  return Array.prototype.map.call(dna, (x) => {
    return transcriber(x);
  }).join('');
};

DnaTranscriber.prototype.toDna = function(rna) {
  let transcriber = transcribeNucleotide(false);
  return Array.prototype.map.call(rna, (x) => {
    return transcriber(x);
  }).join('');
};

module.exports = DnaTranscriber;
