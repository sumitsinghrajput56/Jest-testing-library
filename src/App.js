import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data,setData] = useState("");
  return (
    <div className="App">
      {/* <p>First react test case</p>
      <img title='zomato' src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-02/zomato-infinity-dining-916x516-1_11zon.jpg" /> */}
      <h1>Test OnChange Event with Input text</h1>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
    </div>
  );
}

export default App;
