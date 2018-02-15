//find the next perfect square after the one passed as a parameter
//if the parameter is not itself a perfect square, return -1

//a perfect square is an integer such that sqrt(integer) produces an integer

const findNextSquare = n => Math.sqrt(n) % 1 ? -1 : Math.sqrt(n) ** 2;

module.exports = findNextSquare;