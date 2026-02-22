import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {
  return (
    <div className="App">
      <h1>multiple items with role</h1>
      <h1>custom role</h1>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1" >User Name</label>
      <input type="text" id="input1" />
 <label htmlFor="input2">User age</label>
<input type="text" id="input2" />
      <div role="dummy">
        dummy Text
      </div>
      <input type="text" />
    </div>
  );
}

export default App;
