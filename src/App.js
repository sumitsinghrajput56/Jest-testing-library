import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {
  return (
    <div className="App">
      <h1>getByRole</h1>
      <input type="text" defaultValue="hello" disabled/>
      <button>click me</button>
    </div>
  );
}

export default App;
