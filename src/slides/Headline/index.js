import React, { Component } from 'react';
import './index.css'

export default class Headline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class = "Headline row">
          <div class = "textHeader col s12">
            <h2>An Investigation on Teenage Pregnancy in the US</h2>
            <h4>And its influencing factors</h4>
          </div>
      </div>
    );
  }
}
