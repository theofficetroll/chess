import React, { useState, useEffect } from 'react';
import Board from './board';
import Captured from './captured';

const App = (props) => {


  return(
    <div className="container">
      <Board />
      <Captured />
    </div>
  )
}

export default App;
