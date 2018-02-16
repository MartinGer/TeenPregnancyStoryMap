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
            <h2>An Investigation into Teenage Pregnancy</h2>
            <h3>and it's influencing factors</h3>
          </div>
      </div>
    );
  }
}
