import Square from './square';
import startBoardSTate from '../helpers/boardstate';
import { useState } from 'react';

const Board = (props) => {
  const [ board, setBoard ] = useState([]);

  return(
    <div className="board">
      <Square />
    </div>
  )
}

export default Board;
