import Square from './square';
import startBoardState from '../helpers/boardstate';
import { useState } from 'react';

const Board = (props) => {
  const [ board, setBoard ] = useState([]);

  if (!board) {
    setBoard(startBoardState)(this.props.height, this.props.width);
  };

  return(
    <div className="board">
      <Square />
    </div>
  )
}

export default Board;
