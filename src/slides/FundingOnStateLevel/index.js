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
<<<<<<< HEAD
    return (
      <div>
        <div class="container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <h2 class="header center">FundingOnStateLevel</h2>
                        </div>
                    </div>
                    <div class="section lower">
                        <p class="text">Abstinence-Only Education vs Comprehensive Sex Education
                                        In an effort to reduce teenage pregnancy rates the U.S. government has funded abstinence-only sex education programs for more than a decade. 

                                        Abstinence-only sex education is a form of sex education that teaches not having sex outside of marriage. 

                                        It often exclude other types of reproductive health education e.g. birth control and safe sex an. 
                        </p>
                    </div>
                </div>
      </div>
    );
=======
    let geojson = StatesData.statesData.features
    let mapComponent = map(geojson)
    return (mapComponent)
>>>>>>> 86afc097c68374f12082ba27eb24dfefb2a9364f
  }
}
