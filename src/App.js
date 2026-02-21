import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './Users';

function App() {

  const [data,setData] = useState("");
  return (
    <div className="App">
      <h1>SnapShots testing</h1>
      <button onClick={()=>setData("update data")}>Update Data</button>
      <h1>{data}</h1>
      <Users />
    </div>
  );
}

export default App;
