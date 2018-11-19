import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Script.css';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finished_animating: false,
            width: 0,
            height: 0,
            not_tested: this.props.data.not_tested,
            blocked: this.props.data.blocked,
            passed:  this.props.data.passed,
            failed:  this.props.data.failed
        }
    }
    componentDidMount() {
        this.updateCanvas();
    }

    calculateWidths(total_width) {
        let total_steps = this.state.not_tested + this.state.blocked + this.state.failed + this.state.passed;
        var offset_x = 0;
        let widths = {}

        widths.not_tested = {
            offset_x: offset_x, 
            length_x: total_width * (this.state.not_tested/total_steps)
        };

        offset_x += widths.not_tested.length_x;
        widths.blocked = {
            offset_x: offset_x, 
            length_x: total_width * (this.state.blocked/total_steps)
        };

        offset_x += widths.blocked.length_x;
        widths.failed = {
            offset_x: offset_x, 
            length_x: total_width * (this.state.failed/total_steps)
        };

        offset_x += widths.failed.length_x;
        widths.passed = {
            offset_x: offset_x, 
            length_x: total_width * (this.state.passed/total_steps)
        };

        console.log(widths);
        return widths;
    }

    roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.stroke();
      }

    updateCanvas() {
        console.log('updating status bar');
        let div = ReactDOM.findDOMNode(this);
        let widths = this.calculateWidths(div.width);
        const ctx = this.refs.canvas.getContext('2d');

        // Draw not_tested steps
        ctx.fillStyle = 'grey';
        ctx.fillRect(widths.not_tested.offset_x,0, widths.not_tested.length_x, div.height);

        // Draw blocked steps
        ctx.fillStyle = 'yellow';
        ctx.fillRect(widths.blocked.offset_x,0, widths.blocked.length_x, div.height);

        // Draw failed steps
        ctx.fillStyle = 'red';
        ctx.fillRect(widths.failed.offset_x,0, widths.failed.length_x, div.height);

        // Draw passed steps
        ctx.fillStyle = 'green';
        ctx.fillRect(widths.passed.offset_x,0, widths.passed.length_x, div.height);
    }


    render() {

        return (
            <canvas ref="canvas" className="script-status-bar"/>
        )
    }

}

export default StatusBar;