import React, { Component } from 'react';
import './Script.css';

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

  render() {
    return (
    <div className="Script">
      <div className="title">
      {this.props.title}
      </div>
      <div className="length">
      {this.props.stepCount},
      {this.props.estimatedTime}
      </div>
      <div className="status">
      {this.props.status}
      </div>
      <div className="devices">
      {this.props.devices}
      </div>
      <div className="platform">
      {this.props.platform}
      </div>
    </div>
    );
  }

}

export default Script;
