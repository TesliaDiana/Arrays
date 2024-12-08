'use strict';

const removeElement = (array, item) => {
  const foundIndex = array.indexOf(item);
  if (foundIndex < 0) return;
  array.splice(foundIndex, 1);
};

module.exports = { removeElement };
