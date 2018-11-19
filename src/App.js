import React, { Component } from 'react';
import Script from './ScriptRow/Script';
import ScriptData from './data/ScriptData.js';
import './App.css';

function generateScripts() {
  let scripts = [];
  for (let i=0; i<ScriptData.length; ++i) {
    scripts.push(
      <Script key={i} data={ScriptData[i]}/>
    );
  }
  return scripts;
}

class App extends Component {
  render() {

    return (
      <div className="App">
      <ul className="ScriptList">
        {generateScripts()}
      </ul>
      </div>
    );
  }
}

export default App;
