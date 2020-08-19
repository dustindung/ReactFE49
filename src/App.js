import React from 'react';
import './App.css';
import Demo from './components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      {/* hello world fe 49!
      <BaiTapLayout1></BaiTapLayout1> */}

      {/* <BaiTapLayout2></BaiTapLayout2> */}

      {/* <DataBinding></DataBinding> */}

      <HandleEvent></HandleEvent>
    </div>
  );
}

export default App;
