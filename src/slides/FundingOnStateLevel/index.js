import React, { Component } from 'react';
import Choropleth from 'react-leaflet-choropleth'
import { Map } from 'react-leaflet'
import StatesData from './../../data/geojson-us-states.js'

export default class FundingOnStateLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>FundingOnStateLevel</div>
    )
  }
}
