// Not terribly happy with holding the side of the piece in board
// But I can't think of a cleaner way to do it, so leaving for now

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
        side: null,
        isChosen: false,
      }
    }
  }
  return board;
}

const addPieces = (board, width, height) => {
  // Assuming standard layout for now
  // Leaving space for 960 and other variants
  let updatedBoard = [...board];

  // add pawns
  for(let x = 0; x < width; x++) {
    updatedBoard[x][1].piece = 'pawn';
    updatedBoard[x][1].side = 'white';
    updatedBoard[x][6].piece = 'pawn';
    updatedBoard[x][6].side = 'black';
  }

  // add back rows
  // I don't like how this works, but don't have a cleaner solution off-hand
  updatedBoard[0][0].piece = 'rook';
  updatedBoard[0][0].side = 'white';
  updatedBoard[1][0].piece = 'knight';
  updatedBoard[1][0].side = 'white';
  updatedBoard[2][0].piece = 'bishop';
  updatedBoard[2][0].side = 'white';
  updatedBoard[3][0].piece = 'king';
  updatedBoard[3][0].side = 'white';
  updatedBoard[4][0].piece = 'queen';
  updatedBoard[4][0].side = 'white';
  updatedBoard[5][0].piece = 'bishop';
  updatedBoard[5][0].side = 'white';
  updatedBoard[6][0].piece = 'knight';
  updatedBoard[6][0].side = 'white';
  updatedBoard[7][0].piece = 'rook';
  updatedBoard[7][0].side = 'white';

  updatedBoard[0][7].piece = 'rook';
  updatedBoard[0][7].side = 'black';
  updatedBoard[1][7].piece = 'knight';
  updatedBoard[1][7].side = 'black';
  updatedBoard[2][7].piece = 'bishop';
  updatedBoard[2][7].side = 'black';
  updatedBoard[3][7].piece = 'king';
  updatedBoard[3][7].side = 'black';
  updatedBoard[4][7].piece = 'queen';
  updatedBoard[4][7].side = 'black';
  updatedBoard[5][7].piece = 'bishop';
  updatedBoard[5][7].side = 'black';
  updatedBoard[6][7].piece = 'knight';
  updatedBoard[6][7].side = 'black';
  updatedBoard[7][7].piece = 'rook';
  updatedBoard[7][7].side = 'black';

  return updatedBoard;
}

export {
  startBoardState
}
