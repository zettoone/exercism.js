'use strict';

let DnaTranscriber = function() {};

function transcribeNucleotide(nucleotide, isDna) {
  let complement;
  switch (nucleotide) {
    case 'G':
      complement = 'C';
      break;
    case 'C':
      complement = 'G';
      break;
    case 'A':
      complement = isDna ? 'U' : 'T';
      break;
    case 'T':
    case 'U':
      complement = 'A';
      break;
    default:
      throw new Error('Invalid nucleotide');
  }
  return complement;
}

DnaTranscriber.prototype.toRna = function(dna) {
  return Array.prototype.map.call(dna, (x) => {
    return transcribeNucleotide(x, true);
  }).join('');
};

DnaTranscriber.prototype.toDna = function(rna) {
  return Array.prototype.map.call(rna, (x) => {
    return transcribeNucleotide(x, false);
  }).join('');
};

module.exports = DnaTranscriber;
