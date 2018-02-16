import React, {Component} from 'react';
import {Chart} from 'react-google-charts';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {getStateName} from "../Util/fips";
import {Slider} from "material-ui";
import _ from 'underscore';

export default class FundingOnStateLevel extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#edefff', '#303F9F'], minValue: 0, maxValue: 1}
        };

        this.state = {
            year: 2003,
            options: options,
            fundingType: 'abstinence rate',
            fundingData: []
        };
    }


    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/funding?year=' + this.state.year)
            .then(results => {
                console.log(results);
                return results.json()
            }).then(json => {
                let usStates = [];

                for (let i in json) {
                    let s = json[i];

                    usStates.push([
                        getStateName(s['fips']),
                        s[this.state.fundingType]
                    ])
                }

                let data = [['State', 'Rate']];
                data = data.concat(usStates);
                this.setState({fundingData: data});
            }
        )
    }

    handleSlider = (event, year) => {
        this.setState({year: year});
        this.fetchData();
    };

    handleFunding = (event, fundingType) => {
        console.log("Changed to " + fundingType);
        this.setState({fundingType: fundingType});
        this.fetchData();
    };

    render() {
        return (
            <div class="container center row">
                <h4>Investigating Funding for Sexual Education</h4>
                <div class="section col s8">
                    <Chart
                        graph_id="FundingChart"
                        chartType="GeoChart"
                        data={this.state.fundingData}
                        options={this.state.options}
                        legend_toggle={true}
                        width={"800px"}
                        height={"600px"}/>
                </div>
                <div class="card sticky-action col s4">
                    <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">
                                    Percentage of Sex Edu. Funding by Type {this.state.year}
                                    </span>
                        <p class="section">
                            The Obama administration eliminated nearly two-thirds of federal financing for
                            abstinence-only programs,
                            and started new pregnancy-prevention initiatives, that support evidence-based teen pregnancy
                            prevention and
                            more comprehensive approaches to sex education totaling nearly $190 million in 2009.
                        </p>

                        <RadioButtonGroup name="funding" defaultSelected="abstinence rate" class="section"
                                          onChange={this.handleFunding}>
                            <RadioButton
                                value="abstinence rate"
                                label="Abstinence Only Education"
                            />
                            <RadioButton
                                value="comprehensive rate"
                                label="Comprehensive Sex Education"
                            />
                        </RadioButtonGroup>
                        <div class="section">
                            Select a year (2003-2015)
                            <Slider step={1} value={this.state.year} min={2003} max={2015}
                                    onChange={_.debounce(this.handleSlider, 200)}/>
                        </div>
                    </div>

                    <div class="card-reveal">
                        <span><i class="material-icons right">close</i></span>
                        Source <a href="http://www.nytimes.com/2010/02/03/education/03abstinence.html">Quick Response to Study of Abstinence Education by Tamar Lewin. Feb 2, 2010
                    </a>
                    </div>
                </div>
            </div>
        );
    }
}
