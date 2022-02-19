
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {
    return [];
  } else if (matrix.length == 0) {
    return [];
  }
  else if (matrix.length < 4) {
    matrix[1].sort((a, b) => b - a);
  let newArr = matrix.flat();
  return newArr;
  }
  else {
    matrix[1].sort((a, b) => b - a);
    matrix[3].sort((a, b) => b - a);
  let newArr = matrix.flat();
  return newArr;
  }
  
}
