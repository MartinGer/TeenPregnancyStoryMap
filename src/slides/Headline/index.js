import React, { Component } from 'react';
import './index.css'

export default class Headline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class = "Headline">
          <div class = "textHeader">
            <h2>An Investigation on Teenage Pregnancy in the US</h2>
            <h4>And its influencing factors</h4>
          </div>
      </div>
    );
  }
}
