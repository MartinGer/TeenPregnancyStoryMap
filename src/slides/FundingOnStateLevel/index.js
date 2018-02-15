import React, { Component } from 'react';
import Choropleth from 'react-leaflet-choropleth'
import { Map } from 'react-leaflet'
import StatesData from './../../data/geojson-us-states.js'

const style = {
    fillColor: '#F28F3B',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5
}

const map = (geojson) => (
  <Map>
    <Choropleth
      data={{type: 'FeatureCollection', features: geojson}}
      valueProperty={(feature) => feature.properties.value}
      scale={['#b3cde0', '#011f4b']}
      steps={7}
      mode='e'
      style={style}
      onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.label)}
      // ref={(el) => this.choropleth = el.leafletElement}
    />
  </Map>
)

export default class FundingOnStateLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let geojson = StatesData.statesData.features
    let mapComponent = map(geojson)
    return (mapComponent)
  }
}
