import React from 'react';
import Data from "./data.json";

import './App.css'
import Table from './components/Table'

function App() {
  return (
    <div className="curved table__container">
      <Table data={Data}/>
    </div>
  
  );
}

export default App;
