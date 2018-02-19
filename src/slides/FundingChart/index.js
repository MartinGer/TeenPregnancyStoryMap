import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {getStateName} from "../Util/fips";

export default class FundingChart extends Component {
    constructor(props) {
        super(props);

        this.state = {us_state: 'Alabama'};

        const data = {
            labels: [],
            datasets: []
        };

        const options = {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Funding for Sexual Education in $',
                        position: 'left'
                    },
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 6000000,
                        callback: function(value, index, values) {
                          if(parseInt(value) >= 1000){
                            return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                          } else {
                            return '$' + value;
                          }
                        }
                    },
                    id: 'y-funding'
                }, {
                    type: 'linear',
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Births per 1000 teenagers 13-19'
                    },
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        suggestedMax: 60
                    },
                    gridLines: {
                        display: false
                    },
                    id: 'y-birthrate'
                }]
            }
        };

        this.colors = {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(50, 50, 50, 1)'
            ]
        };

        this.state = {data: data, options: options};
    }

    componentWillMount() {
        this.loadState('01');
    }

    displayXLabel(labels) {
        const data = {...this.state.data};

        data.labels = labels;
        this.setState({data: data});
    }

    displayX(x, label, color, isFill, isDashed, yAxis) {
        const data = {...this.state.data};
        let dashed = [];

        if (isDashed) {
            dashed = [5, 5]
        }

        data.datasets.push({
            label: label,
            fill: isFill,
            lineTension: 0.1,
            borderColor: this.colors.borderColor[color],
            data: x,
            borderDash: dashed,
            yAxisID: yAxis
        });

        this.setState({data: data});
    }

    clear() {
        this.setState({
            data: {
                labels: [],
                datasets: []
            }
        });
    }

    loadState(state) {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/funding/?state=' + state)
            .then(results => {
                return results.json()
            }).then(json => {
            this.clear();

            for (let fips in json) {
                let state = json[fips];

                this.setState({us_state: getStateName(fips)});
                this.displayXLabel(state['year']);
                this.displayX(state['abstinence only'], 'abstinence only', 0, false, false, "y-funding");
                this.displayX(state['comprehensive sex education'], 'comprehensive sex education', 1, false, false, "y-funding");
                this.displayX(state['birthrate'], 'birth rate', 6, true, true, "y-birthrate");
            }
        })
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="section">
                        <h4 class="header center">Sexual Education</h4>
                    </div>
                    <div class="row center">
                        <div class="section col s8">
                            <Line data={this.state.data} options={this.state.options} height={50} width={66}/>
                        </div>
                        <div class="card sticky-action col s4">
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Abstinence-Only vs Comprehensive
                                    <i class="material-icons right">more_vert</i>
                                </span>
                                <p>
                                    In an effort to reduce teenage pregnancy rates the U.S. government has funded
                                    abstinence-only sex education programs for more than a decade.
                                    Abstinence-only sex education is a form of sex education that teaches not having sex
                                    outside of marriage.
                                    It often exclude other types of reproductive health education e.g. birth control and
                                    safe sex an.
                                    In contrast comprehensive sex education covers the use of birth control, safe sexual
                                    practices and usage of contraception, such as condoms, as well as sexual abstinence.
                                </p>
                            </div>

                            <div class="card-action">
                                <a href="#" onClick={() => this.loadState('01')}>Alabama</a>
                                <a href="#" onClick={() => this.loadState('53')}>Washington</a>
                                <a href="#" onClick={() => this.loadState('36')}>NY</a>
                            </div>

                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    Abstinence-Only vs Comprehensive
                                    <i class="material-icons right">close</i>
                                </span>
                                <p><a href="http://www.nytimes.com/2010/02/03/education/03abstinence.html">Source </a>
                                Abstinence-Only Education and Teen Pregnancy Rates: Why We Need Comprehensive Sex Education in the U.S by Kathrin F. Stanger-Hall, David W. Hall Oct 14, 2011</p>
                                <p><a href="http://www.siecus.org/index.cfm?fuseaction=page.viewPage&pageID=1268&nodeID=1">Dataset: </a>
                                SIECUS (Sexuality Information and Education Council of the United States): SIECUS State Profiles for years 2003 to 2017</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
