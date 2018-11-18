import React, { Component } from 'react';
import './Script.css';

class Script extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: props.priority
    };
  }

  shortenText(text, maxLength) {
    if (text.length < maxLength) {
      return text;
    }
    return text.slice(0,maxLength - 3) + "...";
  }

  makeTitle(props) {
    return (
      <div className="PriorityTitle">
        <h1>
          {this.shortenText(this.props.title,26)}
        </h1>
      </div>
    )
  }

  makeDescription() {
    return <div className="ScriptDescription">
    {this.shortenText(this.props.description, 185)}
    </div>
  }

  render() {
    return (
      <div className="Script">
        {this.makeTitle()}
        {this.makeDescription()}
        <a>badge here</a>
      </div>
    );
  }
}

export default Script;
