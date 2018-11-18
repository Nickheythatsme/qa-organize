import React, { Component } from 'react';
import './Script.css';
import accessibility from '../assets/accessibility.png';
import ios from '../assets/ios.png';
import android from '../assets/android.png';
import chrome from '../assets/chrome.png';
import safari from '../assets/safari.png';
import firefox from '../assets/firefox.png';
import edge from '../assets/edge.png';

class Script extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /*
    estimatedTime={estimatedTime} 
    title={title} 
    stepCount={stepCount} 
    platform={platform}
    devices={devices} 
    completion={completion}
  */

  renderPlatformIcon() {
    let platformIcons = {
    "ios": ios,
    "android": android,
    "accessibility": accessibility,
    "safari": safari,
    "chrome": chrome,
    "edge": edge,
    "firefox":firefox,
    }

    let icon = platformIcons[this.props.platform];
    if (icon) {
      return (<img src={icon} alt={this.props.platform}/>)
    }
    return (
      <div className="noIcon">
        {this.props.platform}
      </div>
    );
  }

  renderDevices() {
    let devicesString = "";
    if (!this.props.devices) {
      devicesString = "no devices listed";
    }
    else {
      for (let i=0; i<this.props.devices.length; ++i) {
        devicesString += this.props.devices[i];
        if (i < this.props.devices.length - 1) {
          devicesString += ", ";
        }
      }
    }

    return (
      <div className="devices">
        {devicesString}
      </div>
    );
  }

  render() {
    return (
    <div className="Script">
    <div className="platformIcon">
     {this.renderPlatformIcon()}
    </div>
      <div className="title">
      {this.props.title}
      </div>
      <div className="length">
        <ul>
          <li>
          {this.props.stepCount} steps
          </li>
          <li>
          {this.props.estimatedTime} minutes
          </li>
        </ul>
      </div>
      <div className="status">
        {this.props.status}%
      </div>
      {this.renderDevices()}
      <div className="platform">
        <div className="tag">
          <a href="/">tags will go here</a> {this.props.platform}
        </div>
      </div>
    </div>
    );
  }

}

export default Script;
