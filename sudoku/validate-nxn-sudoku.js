/*
  Given a Sudoku data structure with size n*n,
  write a method that verifies if it has been
  filled out correctly.

  The square root of n must be an integers,
  and every column and row must be equal to n.
*/

/*
  Any given row, column, or square is going
  to be composed of digits ranging from one to
  the length of the board. In the range, every
  number is unique. The sum of this range can
  be used to verify if a given row, column, or
  square is composed of a range from one to length.
  If not, we know there is a repeating number in
  that entity. If the solution is correct, the sum
  of every entity must equate to the sum of the range
  of the board.

  This solution moves through every entity and returns
  false when the sum of the current entity does not equal
  the sum of range from one to the length of the board.
*/

class Sudoku {
  constructor(data) {
    this.board = data;
    this.rangeSum = data[0].reduce((sum, _, i) => sum + i + 1, 0);
  }

  _verifyInput() {
    return this.board.every(row => {
      for (let cell of row) {
        if (typeof cell != 'number') {
          return false
        }
      }
      return true;
    });
  }

  _verifyRows() {
    for (let row of this.board) {
      let rowSum = 0;
      for (let cell of row) {
        rowSum += cell;
      }
      if (rowSum != this.rangeSum) return false;
    }
    return true;
  }

  _verifyColumns() {
    for (let i = 0; i < this.board[0].length; i++) {
      let colSum = 0;
      for (let row of this.board) {
        colSum += row[i];
      }
      if (colSum != this.rangeSum) return false;
    }
    return true;
  }

  _verifySquares() {
    let board = [...this.board];
    let length = Math.sqrt(board[0].length);

    while (board.length !== 0) {
      let sqrSum = 0;
      for (let i = 0; i < length; i++) {
        sqrSum += board[i]
          .splice(0, length)
          .reduce((sum, n) => sum + n, 0);
      }
      if (sqrSum != this.rangeSum) return false;
      if (board[0].length == 0) board.splice(0, length);
    }
    return true;
  }

  isValid() {
    return this._verifyInput()
      && this._verifyRows()
      && this._verifyColumns()
      && this._verifySquares();
  }
}

module.exports = Sudoku;