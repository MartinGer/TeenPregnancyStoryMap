import React, {Component, View} from 'react';
import {Chart} from 'react-google-charts';
import './index.css';
import {getStateName} from "../Util/fips";
import {Slider} from "material-ui";
import _ from 'underscore';

export default class TeenPregnancyUSStates extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#E8EAF6', '#0D47A1']}
        };

        this.state = {year: 2003, options: options, data: []};
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
                let usStates = [['State', 'Teenage Births Per 1000 Teens']];

                for (let i in json) {
                    let state = json[i];
                    usStates.push([
                        getStateName(state['fips']),
                        state['birthrate']
                    ])
                }

                this.setState({data: usStates});
            }
        )
    }

    handleSlider = (event, year) => {
        this.setState({year: year});
        this.fetchData();
    };

    render() {
        return (
            <div class="container section center row">
                <div class="section">
                    <h4>Investigating Teen Pregnancy per State</h4>
                </div>
                <div class="container  col s8">
                    <Chart
                        graph_id="TeenPregnancyUsa"
                        chartType="GeoChart"
                        data={this.state.data}
                        options={this.state.options}
                        legend_toggle={true}
                        width={"800px"}
                        height={"600px"}/>
                </div>
                <div class="card sticky-action col s4">
                    <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">
                                    US Teen Pregnancy per State in {this.state.year}
                            </span>

                        <p class="section">
                            Number of teenage pregnancies per 1000 teenagers, age 15-19.
                        </p>

                        <p class="section">
                            Select a year (2003-2016)
                            <Slider step={1} value={this.state.year} min={2003} max={2016}
                                    onChange={_.debounce(this.handleSlider, 200)}/>
                        </p>
                    </div>
                </div>

                <div class="card-reveal">

                </div>
            </div>
        );
    }
}
