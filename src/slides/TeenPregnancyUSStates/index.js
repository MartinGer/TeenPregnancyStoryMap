import React, {Component, View} from 'react';
import L from 'leaflet';
import StatesData from './../../data/geojson-us-states.js'
import Slider from 'material-ui/Slider';
import _ from 'underscore';
import './index.css';


export default class TeenPregnancyUSStates extends Component {

    constructor(props) {
        super(props);

        this.map
        this.state = {
            geojson: StatesData.statesData,
            selectedYear: 2015,
            years: [
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
            ]
        };

        console.log(this.state.geojson)
        this.loadMap = this.loadMap.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.initializeMap = this.initializeMap.bind(this)
    }

    fetchData(year) {
        let geojson = this.state.geojson
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
                this.setState({'geojson': geojson})
            }
        )
        this.loadMap(this.map)
    }

    componentDidMount() {
        console.log('Component did mount')
        let year = this.state.selectedYear
        this.map = this.initializeMap()
        this.fetchData(year);
        this.showLegend(this.map);
    }

    initializeMap() {
        var map = L.map('map').setView([37.8, -96], 4);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.light'
        }).addTo(map);

        return map
    }

    loadMap(map) {
        // initialize the map
        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });

        var geojson;
        geojson = L.geoJson(this.state.geojson, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        /**
         * Setting color scheme
         **/
        function getColor(d) {
            return d > 35 ? '#800026' :
                d > 30 ? '#BD0026' :
                    d > 25 ? '#E31A1C' :
                        d > 20 ? '#FC4E2A' :
                            d > 15 ? '#FD8D3C' :
                                '#FFEDA0';
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

        /**
         * Adding interaction
         **/

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({weight: 5, color: '#666', dashArray: '', fillOpacity: 0.7});

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
        }

        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
            layer.on({mouseover: highlightFeature, mouseout: resetHighlight, click: zoomToFeature});
        }
    }

    showLegend(map) {
        function getColor(d) {
            return d > 35 ? '#800026' :
                d > 30 ? '#BD0026' :
                    d > 25 ? '#E31A1C' :
                        d > 20 ? '#FC4E2A' :
                            d > 15 ? '#FD8D3C' :
                                '#FFEDA0';
        }

        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function () {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 20, 30, 40, 50],
                labels = [],
                from,
                to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push('<i style="background:' + getColor(from + 1) + '"></i> '
                    + from + (to ? '&ndash;' + to : '+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };

        legend.addTo(map);
    };

    handleSlider = (event, value) => {
        console.log("handle slider" + value);
        this.setState({selectedYear: value});
        this.fetchData(value);
    };

    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div class="container">
                <link rel="stylesheet" href="https://unpkg.com/leaflet@0.7.7/dist/leaflet.css"/>
                <div class="section no-pad-bot">
                    <div class="container">
                        <h4 class="header center">Teen Pregnancy US States</h4>
                    </div>
                </div>
                <div class="section no-pad-bot">
                    <div id="mapUI">
                        <div ref={(node) => this._mapNode = node} id="map" style={{height: 400}}>
                            {/* <h2>Year</h2>
              <label id='month'></label>
              <input id='slider' type='range' min='2003' max='2017' step='1' value='2003'/> */}
                        </div>
                    </div>
                </div>
                <div class="section no-pad-bot">
                    {/* <View>Test</View> */}
                    <Slider
                        min={this.state.years[0]}
                        max={this.state.years[this.state.years.length - 1]}
                        step={1}
                        onChange={_.debounce(this.handleSlider, 300)}
                    />
                </div>
            </div>
        );
    }
}
