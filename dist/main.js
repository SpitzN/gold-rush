
let board = new GoldRush(5,5)

// console.log(board);

board.print()

// board.print()
// board.movePlayer(2, "left")
// board.movePlayer(2, "up")
// board.print()

// console.log(board.getMatrix(0,1));
// console.log(board.getMatrix(1,0));
console.log(board.player1.score)
console.log(board.moveValue(1, "down"));
board.movePlayer(1, "down")
board.print()
console.log(board.player1.score)
console.log(board.player1.score)
// console.log(board.checkScoreAfterMove(1, 'down'));

// console.log(board.moveValue(2, "up"));
