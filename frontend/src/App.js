import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const url = 'http://127.0.0.1:8000/furniture/test' 
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  })
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
