import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import EditableRow from './components/Editable';

function App() {
  return (
    <div className="App">
      <SortingTable />
      
    </div>
  )
}

export default App;
