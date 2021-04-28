import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from './router-outlet';
import './App.scss';


function App() {
  return (
    <BrowserRouter>     
        <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;
