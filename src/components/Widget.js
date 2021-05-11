import React, { Component } from 'react';
import '../index.css';

class Widget extends Component {
    //responsive grid
    constructor(props) {
        super(props);
        this.spanStyles = {};
        if (props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${props.colspan}`;
        }
        if (props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${props.rowspan}`;
        }
    }
    render() {
        return (
            <div style={this.spanStyles} className="Widget">
                <div className="header">
                    <h2>
                        {this.props.heading}
                    </h2>
                    {this.props.loading ? "loading..." : ""}
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Widget;

