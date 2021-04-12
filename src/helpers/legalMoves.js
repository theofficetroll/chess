const onBoard = (board, x, y) => {
  // return true if location is within bounds of board
}

const isEnemy = (board, x, y) => {
  // return true if location holds enemy piece
}

const isEmpty = (board, x, y) => {
  // return true if location is empty
}

const King = (board, x, y) => {
  let possibleMoves = [];

  // iterate through possible spaces
    // if onBoard is True
      // if space isEmpty or isEnemy
        // push that location into possibleMoves

  return possibleMoves;
}

const Queen = (board, x, y) => {
  let possibleMoves = [];

  // iterate through possible spaces
    // if onBoard is True
      // if space isEmpty
        // push that location into possibleMoves
        // continue down that path and check next space
      // if space isEnemy

  return possibleMoves;
}
