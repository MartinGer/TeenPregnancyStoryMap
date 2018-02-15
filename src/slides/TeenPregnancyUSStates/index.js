import React, {Component, View} from 'react';
import {Chart} from 'react-google-charts';
import './index.css';
import {getStateName} from "./fips";

export default class TeenPregnancyUSStates extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#edefff', '#303F9F']}
        };

        this.state = {options: options, data: [['State', 'Teenage Births Per 1000 Teens']]};
    }

    componentWillMount() {
        this.fetchData(2003);
    }

    fetchData(year) {
        console.log('Fetch');
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/?year=' + year)
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


    render() {
        return (
            <div id="teenMapUsa" class="container center">
                <Chart
                    chartType="GeoChart"
                    data={this.state.data}
                    options={this.state.options}
                    graph_id="GeoChart"
                    legend_toggle={true}
                    width={"1000px"}
                    height={"600px"}/>
            </div>
        );
    }
}
