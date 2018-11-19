import React, { Component } from 'react';
import StatusBar from './StatusBar';
import './Script.css';

/* Import images */
import accessibility from '../assets/accessibility.png';
import ios from '../assets/ios.png';
import android from '../assets/android.png';
import web from '../assets/web.png';


/*
  title:"Sign up with Facebook",
  platform:"ios",
  devices:["iPhone 7 iOS 12.1","iPhone 8 iOS 12.0","iPad 5th Gen iOS 11.4"],
  type:"manual",
  priority:"high",
  status:{
      not_tested:0,
      blocked:1,
      passed:13,
      failed:3
  },
  estimated_time:45,
  step_count:17
*/

class Script extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.statusBarRef = React.createRef();
    this.state = {
    };
  }

  componentDidMount() {
    /*
    this.setState({
      height: this.divElement.clientHeight
    });
    */
  }

  renderPlatformIcon() {
    let platformIcons = {
    "ios": ios,
    "android": android,
    "accessibility": accessibility,
    "web":web,
    }

    let icon = platformIcons[this.data.platform];
    if (icon) {
      return (<img src={icon} alt={this.data.platform}/>)
    }
    return (
      <div className="no-icon">
        {this.data.platform}
      </div>
    ); 
  }

  renderDevices() {
    let devicesString = "";
    if (!this.data.devices) {
      devicesString = "no devices listed";
    }
    else {
      for (let i=0; i<this.data.devices.length; ++i) {
        devicesString += this.data.devices[i];
        if (i < this.data.devices.length - 1) {
          devicesString += ", ";
        }
      }
    }

    return (
      <div className="script-devices">
        {devicesString}
      </div>
    );
  }

  renderLength() {
    return (
      <div className="script-length">
        <ul>
          <li>
          {this.data.step_count} steps
          </li>
          <li>
          {this.data.estimated_time} min
          </li>
        </ul>
      </div>
      );
  }

  renderTitle() {
      return (
        <div className="script-title">
          <ul>
            <li>
              <div className="script-title-icon">
                {this.renderPlatformIcon()}
              </div>
            </li>
            <li>
              {this.data.title}
            </li>
          </ul>
        </div>
      );
  }

  renderStatusBar() {
    return (
      <div className="script-status">
        <StatusBar ref={this.statusBarRef} data={this.data.status}/>
      </div>
    );
  }

  render() {
    return (
    <div className="script">
      {this.renderTitle()}
      {this.renderLength()}
      {this.renderDevices()}
      {this.renderStatusBar()}
    </div>
    );
  }

}

export default Script;
