import React from 'react';
import Data from "./data.json";


import './App.css'
import Tableclass from './components/Tableclass'
import Table from './components/Table'

function App() {
  return (
    <div className="curved table__container">
       <Table data={Data} />
        {/* <Tableclass data={Data} /> */}
    </div>
  
  );
}

export default App;
