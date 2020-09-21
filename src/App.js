import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,message} from 'antd';

function App() {

  const success = () => {
    console.log("message test")
    message.success('This is a success message');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Button type="primary" onClick={success}>测试按钮</Button>
      </div>
    </div>
    
  );
}




export default App;
