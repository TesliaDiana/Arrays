'use strict';

const difference = (array1, array2) => array1.reduce((accum, value) => {
  if (!array2.includes(value)) accum.push(value);
  return accum;
}, []);

module.exports = { difference };
