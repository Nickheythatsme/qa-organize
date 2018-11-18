import React, { Component } from 'react';
import Script from './ScriptComponent/Script';
import './App.css';

class App extends Component {
  render() {
    let longDescription = "This is a very long desction. This script is meant to test the ability for a script card to slice the description and append an elipses, indicating that there is more to the description! WOW there is way way too much description to hold!";
    let longTitle = "This is an extremely long title. No point in having one this long!";

    return (
      <div className="App">
        <div className="ScriptColumn">
          <ul>
            <li>
              <Script title="test title!" description="this is a test script! There are requirements and everything!" priority="low"/>
            </li>
            <li>
              <Script title="test title!" description="This script tests the functionality of the carousel"/>
            </li>
            <li>
              <Script title="Test long description" description={longDescription}/>
            </li>
            <li>
              <Script title={longTitle} description={longDescription}/>
            </li>
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
