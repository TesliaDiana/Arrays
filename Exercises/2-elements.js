'use strict';

const removeElements = (array, ...items) => {
  let foundIndex = 0;
  for (const item of items) {
    foundIndex = array.indexOf(item);
    if (foundIndex >= 0) array.splice(foundIndex, 1);
  }
};

module.exports = { removeElements };
