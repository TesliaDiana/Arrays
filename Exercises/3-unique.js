'use strict';

const unique = (array) => array.reduce((accum, value) => {
  if (!accum.includes(value)) accum.push(value);
  return accum;
}, []);

module.exports = { unique };
