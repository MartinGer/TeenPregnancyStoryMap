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
        <h1>An investigation on Teenage Pregnancy</h1>    
        <h2>and by which factors it gets influenced</h2>   
      </div>
    );
  }
}
