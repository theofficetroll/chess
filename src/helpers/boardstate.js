const startBoardState = (height, width) => {
  let board = createEmptyBoard(width, height);
  board = addPieces(board, width, height);
  return board;
}

const createEmptyBoard = (width, height) => {
  let board = [];

  for (let i = 0;  i < width; i++) {
    board.push([]);
    for (let j = 0; j < height; j++) {
      board[i][j] = {
        x: i,
        y: j,
        piece: null,
        isChosen: false,
      }
    }
  }
}
