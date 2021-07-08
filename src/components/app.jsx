import React, { useState, useEffect } from 'react';
import Board from './board.jsx';
import Captured from './captured.jsx';

const App = (props) => {


  return(
    <div className="container">
      <Board />
      <Captured />
    </div>
  )
}

export default App;
