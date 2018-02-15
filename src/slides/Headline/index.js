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
            <h2>An investigation on Teenage Pregnancy</h2>    
            <h3>and by which factors it gets influenced</h3>   
          </div>
      </div>
    );
  }
}
