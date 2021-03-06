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
            colorAxis: {colors: ['#E0F2F1', '#004D40'], minValue: 0, maxValue: 1},
            chartArea: {width: '100%'},
            width: '100%'
        };

        this.state = {
            year: 2006,
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
              <div class="section">
                <h4>Investigating Funding for Sexual Education</h4>
              </div>
                <div class="section col s8">
                    <Chart
                        graph_id="FundingChart"
                        chartType="GeoChart"
                        data={this.state.fundingData}
                        options={this.state.options}
                        legend_toggle={true}
                        width={"100%"}
                        height={"100%"}/>
                </div>
                <div class="card sticky-action col s4">
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                                Percentage of Sex Edu. Funding by Type {this.state.year}
                            <i class="material-icons right">more_vert</i>
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
                                label="Abstinence-only Education"
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
                            <span class="card-title activator grey-text text-darken-4">
                                Percentage of Sex Edu. Funding by Type {this.state.year}
                                <i class="material-icons right">close</i>
                            </span>
                        <p><a href="http://www.nytimes.com/2010/02/03/education/03abstinence.html">Source </a>
                            Quick Response to Study of Abstinence Education by Tamar Lewin. Feb 2, 2010</p>
                            <p><a href="http://www.siecus.org/index.cfm?fuseaction=page.viewPage&pageID=1268&nodeID=1">Dataset: </a>
                            SIECUS (Sexuality Information and Education Council of the United States): SIECUS State Profiles for years 2003 to 2017, 2007 is missing</p>
                    </div>
                </div>
            </div>
        );
    }
}
