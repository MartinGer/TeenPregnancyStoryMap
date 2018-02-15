import React, {Component, View} from 'react';
import {Chart} from 'react-google-charts';
import './index.css';
import {getStateName} from "./fips";
import {Slider} from "material-ui";
import _ from 'underscore';

export default class TeenPregnancyUSStates extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#edefff', '#303F9F']}
        };

        this.state = {year: 2003, options: options, data: [['State', 'Teenage Births Per 1000 Teens']]};
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/?year=' + this.state.year)
            .then(results => {
                console.log(results);
                return results.json()
            }).then(json => {
                let usStates = [];

                for (let i in json) {
                    let state = json[i];
                    usStates.push([
                        getStateName(state['fips']),
                        state['birthrate']
                    ])
                }

                let data = this.state.data;
                data = data.concat(usStates);
                this.setState({data: data});
            }
        )
    }

    handleSlider = (event, year) => {
        this.setState({year: year});
        this.fetchData();
    };

    render() {
        return (
            <div class="container center">
                <h4>US Teen Pregnancy per State in {this.state.year}</h4>
                <div class="container center">
                    <Chart
                        chartType="GeoChart"
                        data={this.state.data}
                        options={this.state.options}
                        graph_id="GeoChart"
                        legend_toggle={true}
                        width={"1000px"}
                        height={"600px"}/>
                </div>
                <Slider step={1} value={this.state.year} min={2003} max={2016}
                        onChange={_.debounce(this.handleSlider, 200)}/>
            </div>
        );
    }
}
