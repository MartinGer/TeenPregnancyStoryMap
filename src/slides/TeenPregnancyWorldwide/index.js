import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class TeenPregnancyUSWorldwide extends Component {
    constructor(props) {
        super(props);

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
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/world/?startYear=2000&endYear=2015')
            .then(results => {
                return results.json()
            }).then(json => {
            const data = {...this.state.data};
            data.labels = json['year'];

            let i = 0;
            for (let attribute in json) {
                if (attribute !== 'year') {
                    data.datasets.push({
                        label: attribute,
                        fill: false,
                        borderColor: this.colors.borderColor[i],
                        data: json[attribute]
                    });
                    i++;
                }
            }
            this.setState({data: data});
        })
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <h2 class="header center">Teen Pregnancy Worldwide</h2>
                        </div>
                    </div>
                    <div class="section center">
                        <Line data={this.state.data} options={this.state.options}/>
                    </div>
                    <div class="section lower">
                        <p>The United States of America appear to always have higher teen pregnancy rates then other western countries in the European Union. Numbers are decreasing but still staying way over the European average. </p>
                    </div>
                </div>
            </div>
        );
    }
}
