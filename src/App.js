import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';
import handleOtherMethod from './helper';

function App() {

  const [data,setData] = useState("");
  const handleData = () => {
    setData("hello");
  }


  return (
    <div className="App">
      <h1>functional component method testing</h1>
      <button data-testid="btn1" onClick={handleData}>Update Data</button>
      <button onClick={handleOtherMethod}>Print</button>
      <h1>{data}</h1>
      <Users />
    </div>
  );
}

export default App;
