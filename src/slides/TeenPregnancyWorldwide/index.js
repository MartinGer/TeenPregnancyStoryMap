import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './index.css'
import 'chartjs-plugin-annotation'
import {ScrollContainer} from "../../components/OnePageScroll";

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
            },
            annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 2007,
                        borderColor: 'black',
                        borderWidth: 3,
                        label: {
                          content: "What happened here?",
                          enabled: true
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

    moveDown() {
      this.props.scrollContainer.moveDown()
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="section no-pad-bot">
                        <h4 class="header center">Teen Pregnancies around the Globe</h4>
                    </div>
                    <div class="row center">
                        <div class="section col s8">
                            <Line data={this.state.data} options={this.state.options} width={250}/>
                        </div>
                        <div class="section col s4">
                            <div class="card">
                                <div class="card-content activator">
                                        <span class="card-title activator grey-text text-darken-4">
                                            What is influencing the US teen pregnancy rate?
                                            <i class="material-icons right">more_vert</i>
                                        </span>
                                    <p class="section">
                                        The United States of America appear to always have had a significant higher
                                        teen
                                        pregnancy rates then other western countries in the European Union.
                                    </p>
                                    <p class="section">
                                        In the last decades, the US has seen a downwards trend, which seems to have
                                        sped
                                        up in 2007. We want to investigate what changed.
                                    </p>
                                    <div class="card-action">
                                        <a onClick={this.moveDown.bind(this)}>What happened in 2007?</a>
                                    </div>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">
                                        What is influencing the US teen pregnancy rate?
                                        <i class="material-icons right">close</i>
                                    </span>
                                    <p><a href="http://www.who.int/mediacentre/factsheets/fs364/en/">Source </a>
                                    World Health Organization: Adolescent pregnancy January 2018</p>
                                    <p><a href="https://data.worldbank.org/indicator/SP.ADO.TFRT?name_desc=true">Dataset: </a>
                                    The World Bank: Adolescent fertility rate (births per 1,000 women ages 15-19), 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
