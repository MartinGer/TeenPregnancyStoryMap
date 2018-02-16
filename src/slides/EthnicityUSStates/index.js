import React, {Component, View} from 'react';
import {Chart} from 'react-google-charts';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {getStateName} from "../Util/fips";
import {Slider} from "material-ui";
import _ from 'underscore';
import './index.css';

export default class EthnicityUSStates extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#f0f0ff', '#212121'], minValue: 0, maxValue: 5}
        };

        this.state = {
            year: 2003,
            options: options,
            ethnicity: 'white',
            ethnicityData: []
        };
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/ethnicity?year=' + this.state.year)
            .then(results => {
                console.log(results);
                return results.json()
            }).then(json => {
                let usStates = [['State', 'Rate by Population Share']];

                for (let i in json) {
                    let s = json[i];
                    let rateByEthnicity = this.getRateByEthnicity(s, this.state.ethnicity);

                    usStates.push([
                        getStateName(s['fips']),
                        rateByEthnicity
                    ])
                }

                this.setState({ethnicityData: usStates});
            }
        )
    }

    getRateByEthnicity(data, ethnicity) {
        let rate = 0;

        switch (ethnicity) {
            case 'white':
                rate = data['white'] / data['estimated white'];
                break;
            case 'african american':
                rate = data['african american'] / data['estimated african american'];
                break;
            case 'american native':
                rate = data['american native'] / data['estimated native'];
                break;
            case 'asian or pacific islander':
                rate = data['asian or pacific islander'] / (data['estimated pacific islander'] + data['estimated asian']);
                break;
        }

        if (isFinite(rate)) {
            return rate;
        } else {
            return 0;
        }
    }

    handleSlider = (event, year) => {
        this.setState({year: year});
        this.fetchData();
    };

    handleEthnicity = (event, ethnicity) => {
        console.log("Changed to " + ethnicity)
        this.setState({ethnicity: ethnicity});
        this.fetchData();
    };

    render() {
        return (
            <div class="container center row">
                <h4>Investigating Ethnic Differences</h4>
                <div class="section col s8">
                    <Chart
                        graph_id="EthnicityChart"
                        chartType="GeoChart"
                        data={this.state.ethnicityData}
                        options={this.state.options}
                        legend_toggle={true}
                        width={"800px"}
                        height={"600px"}/>
                </div>
                <div class="card sticky-action col s4">
                    <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">
                                    Teen pregnancy rate ({this.state.year}) to estimated ethnic population share (2016)
                                    </span>
                        <p class="section">
                            Teen pregnancies by ethnicity of mother divided to an estimated birth rate based on the
                            ethnic population share (status 2016).
                        </p>

                        <RadioButtonGroup name="ethnicity" defaultSelected="white" class="section"
                                          onChange={this.handleEthnicity}>
                            <RadioButton
                                value="white"
                                label="White"
                            />
                            <RadioButton
                                value="african american"
                                label="African American"
                            />
                            <RadioButton
                                value="american native"
                                label="American Native"
                            />
                            <RadioButton
                                value="asian or pacific islander"
                                label="Asian or Pacific Islander"
                            />
                        </RadioButtonGroup>
                        <div class="section">
                            Select a year (2003-2016)
                            <Slider step={1} value={this.state.year} min={2003} max={2016}
                                    onChange={_.debounce(this.handleSlider, 200)}/>
                        </div>
                    </div>

                    <div class="card-reveal">

                    </div>
                </div>
            </div>
        );
    }
}
