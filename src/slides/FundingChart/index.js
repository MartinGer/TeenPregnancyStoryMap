import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class FundingChart extends Component {
    constructor(props) {
        super(props);

        this.state = {};

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
                        labelString: 'Births per 1000 teenagers 13-19'
                    }
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
                'rgba(255, 159, 64, 1)'
            ]
        };

        this.state = {data: data, options: options};
    }

    componentWillMount() {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/funding/?state=01')
            .then(results => {
                return results.json()
            }).then(json => {
            for (let fips in json) {
                let state = json[fips];

                this.displayY(state['year']);
                this.displayX(state['abstinence only'], 'abstinence only', 0, false);
                this.displayX(state['comprehensive sex education'], 'comprehensive sex education', 1, false);
                this.displayX(state['total'], 'total', 2, true);
            }
        })
    }

    displayY(y) {
        const data = {...this.state.data};

        data.labels = y;
        this.setState({data: data});
    }

    displayX(x, xLabel, color, isFill) {
        const data = {...this.state.data};
        data.datasets.push({
            label: xLabel,
            fill: isFill,
            lineTension: 0.1,
            borderColor: this.colors.borderColor[color],
            data: x
        });

        this.setState({data: data});
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <h2 class="header center">Sex Education Funding</h2>
                        </div>
                    </div>
                    <div class="section center">
                        <Line data={this.state.data} options={this.state.options}/>
                    </div>
                </div>
            </div>
        );
    }
}
