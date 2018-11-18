import React, { Component } from 'react';
import Script from './ScriptComponent/Script';
import './App.css';

function generateTestScript() {
  const Titles = [
    "Booking Verification Flow",
    "Identity Flow",
    "Report a comment tool",
    "🎡 Create an Account",
    "🗝 Filter redesign",
    "🙏 Booking flow"
  ];

  const Devices = {
    'android':['Galaxy S7 Android 8.0','Pixel XL 2 Android 8.3','Nexus 5 Android 7.3','Pixel SIM 1932 Android 8.0'],
    'ios':['iPhone 8 iOS 12.0','iPhone XR iOS 12.0.1','iPad 5th Gen LTE'],
  }

  const Platorms = [
    "ios",
    "android",
    "accessibility",
    "safari",
    "web",
    "chrome",
    "edge",
    "firefox",
  ]

  let randInt = function(max) {
    if (!max) {max = 100;}
    return Math.floor(Math.random() * max);
  }

  let chooseRandom = function(arr) {
    return arr[randInt() % arr.length];
  }

  let status = randInt(100);
  let estimatedTime = randInt(100);
  let stepCount = randInt(10); 
  let title = chooseRandom(Titles); 
  let platform = chooseRandom(Platorms);
  let devices = undefined;

  let arrDevices = Devices[platform]
  console.log(platform);
  console.log(arrDevices);
  if (arrDevices) {
    devices = [];
    for (let i=0; i<randInt(10); ++i) {
      console.log(i);
        devices.push(chooseRandom(arrDevices));
    }
  }

  return (
    <Script 
      estimatedTime={estimatedTime} 
      title={title} 
      stepCount={stepCount} 
      platform={platform}
      devices={devices} 
      status={status}
      />
  );

}

class App extends Component {
  render() {

    return (
      <div className="App">
      <ul className="ScriptList">
        {generateTestScript()}
        {generateTestScript()}
        {generateTestScript()}
      </ul>
      </div>
    );
  }
}

export default App;
