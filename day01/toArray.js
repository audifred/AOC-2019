exports.convertInputToArray = input =>
  input
    .toString()
    .split(/\n|\$/)
    .map(item => parseInt(item, 10));
