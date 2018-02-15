//find the next perfect square after the one passed as a parameter
//if the parameter is not itself a perfect square, return -1

//a perfect square is an integer such that sqrt(integer) produces an integer

function findNextSquare(sq) {
  let sqRoot = Math.sqrt(sq);
  return sqRoot % 1 ? -1 : ++sqRoot ** 2;
}

module.exports = findNextSquare;