import React from 'react';
import Square from './square.jsx';
import { startBoardState } from '../helpers/boardstate';
import { useState } from 'react';

const Board = () => {
  const [ board, setBoard ] = useState(startBoardState(8, 8));

  let handleClick = (x, y) => {
    // Placeholder
  };

  let handleContextMenu = (x, y) => {
    // Placeholder
  };

  let renderBoard = (board) => {
    return board.map(boardRow => {
      return boardRow.map(boardSquare => {
        return (
          <div key={boardSquare.x * 10 + boardSquare.y}>
            <Square onClick={() => handleClick(boardSquare.x, boardSquare.y)} cMenu={(e) => handleContextMenu(e, boardSquare.x, boardSquare.y)} value={boardSquare}/>
            {(boardRow[boardRow.length - 1] === boardSquare) ? <div className="clear" /> : ''}
          </div>
        )
      })
    })
  }

  return(


    <div className="board">
      {renderBoard(board)}
    </div>
  )
}

export default Board;
