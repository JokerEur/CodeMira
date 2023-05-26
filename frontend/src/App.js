import logo from './logo.svg';
import './App.css';
import React, { useEffect , useState, } from "react";

function App() {
  const [tab, getTab] = useState([])

  useEffect(() => {
      fetchTab()
  }, [])


  const fetchTab = () => {
      fetch('http://127.0.0.1:8000/')
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getTab(response);
          })

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {tab.headers} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
