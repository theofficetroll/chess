import React from 'react';

const Square = ({ value, onClick, cMenu }) => {

  let className = 'square ' + value.shade + ' ' + value.side;

  return(
    <div className={className} onClick={onClick} onContextMenu={cMenu} >
      {value.piece || "_"}
    </div>
  )
}

export default Square;
