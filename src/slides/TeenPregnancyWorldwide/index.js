import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";

export default class TeenPregnancyWorldwide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const mapCenter = [39.9528, -75.1638];
    const zoomLevel = 15;

    return (
      <div>
        <Row type ='flex' gutter={16}>
          <Map center={mapCenter} zoom={zoomLevel}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </Row>
      </div>
    )
  }
}
