import React, {Component} from 'react';
import L from 'leaflet';
import StatesData from './../../data/geojson-us-states.js'

export default class TeenPregnancyUSStates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      geojson: StatesData.statesData,
      selectedYear: 2015
    };

    console.log(this.state.geojson)

    this.loadMap = this.loadMap.bind(this);
  }

  componentDidMount() {

    console.log('Component did mount')

    let geojson = this.state.geojson
    let year = this.state.selectedYear

    let url = 'http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/?year=' + year
    console.log(url)

    fetch(url)
    .then(results => {
      return results.json()
    }).then(
      data => {
        let features = geojson.features
        let json = features.filter(state => {
          let match = data.filter(dataState => {
            return (dataState.fips === state.id)
          })
          return (match.length === 1)
        }).map(state => {
          let match = data.filter(dataState => {
            return (dataState.fips === state.id)
          })
          var properties = state.properties
          properties.density = match[0].birthrate
          state.properties = properties
          return state
        })

        geojson.features = json

        this.setState({'geojson':geojson})
      }
    ).then(this.loadMap)
  }

  loadMap() {
    // initialize the map
    var map = L.map('map').setView([
      37.8, -96
    ], 4);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.light'
    }).addTo(map);

    // control that shows state info on hover
    // var info = L.control();
    //
    // info.onAdd = function(map) {
    //   this._div = L.DomUtil.create('div', 'info');
    //   this.update();
    //   return this._div;
    // };
    //
    // info.update = function(props) {
    //   this._div.innerHTML = '<h4>US Population Density</h4>' + (
    //     props
    //     ? '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
    //     : 'Hover over a state');
    // };
    //
    // info.addTo(map);

    // get color depending on population density value
    function getColor(d) {
      return d > 1000
        ? '#800026'
        : d > 500
          ? '#BD0026'
          : d > 200
            ? '#E31A1C'
            : d > 100
              ? '#FC4E2A'
              : d > 50
                ? '#FD8D3C'
                : d > 20
                  ? '#FEB24C'
                  : d > 10
                    ? '#FED976'
                    : '#FFEDA0';
    }

    function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
      };
    }

    // function highlightFeature(e) {
    //   var layer = e.target;
    //
    //   layer.setStyle({weight: 5, color: '#666', dashArray: '', fillOpacity: 0.7});
    //
    //   if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //     layer.bringToFront();
    //   }
    //
    //   // info.update(layer.feature.properties);
    // }

    // function resetHighlight(e) {
    //   geojson.resetStyle(e.target);
    //   // info.update();
    // }
    //
    // function zoomToFeature(e) {
    //   map.fitBounds(e.target.getBounds());
    // }

    function onEachFeature(feature, layer) {
      // layer.on({mouseover: highlightFeature, mouseout: resetHighlight, click: zoomToFeature});
    }

    var geojson

    console.log("Initializing map")
    let geojsonData = this.state.geojson
    console.log(geojsonData)
    geojson = L.geoJson(geojsonData, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);

    map.attributionControl.addAttribution('BirthRates');

    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function(map) {

      var div = L.DomUtil.create('div', 'info legend'),
        grades = [
          0,
          10,
          20,
          50,
          100,
          200,
          500,
          1000
        ],
        labels = [],
        from,
        to;

      for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push('<i style="background:' + getColor(from + 1) + '"></i> ' + from + (
          to
          ? '&ndash;' + to
          : '+'));
      }

      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(map);

    var years = [
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017
    ];

    function filterBy(month) {}
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@0.7.7/dist/leaflet.css" />
        <div id="mapUI">
          <div ref={(node) => this._mapNode = node} id="map" style={{height: 500, width: 900}}>
            {/* <h2>Year</h2>
            <label id='month'></label>
            <input id='slider' type='range' min='2003' max='2017' step='1' value='2003'/> */}
          </div>
        </div>
      </div>
    );
  }
}
