import React, {Component} from 'react';
import './index.css'
import {Chart} from 'react-google-charts';

export default class ReligionUSStates extends Component {
    constructor(props) {
        super(props);

        let options = {
            region: 'US',
            resolution: 'provinces',
            colorAxis: {colors: ['#E8EAF6', '#0D47A1']},
            chartArea: {width: '100%'},
            width: '100%'
        };

        this.state = {options: options, data: []};
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://vm-tuk2-team03.eaalab.hpi.uni-potsdam.de/api/usa/religion')
            .then(results => {
                console.log(results);
                return results.json()
            }).then(json => {
                let usStates = [['State', 'Adherents in %']];

                for (let i in json) {
                    let state = json[i];
                    usStates.push([
                        state['state'],
                        state['adherents %']
                    ])
                }

                this.setState({data: usStates});
            }
        )
    }

    render() {
        return (

          <div class="container section center row">
              <div class="section">
                  <h4>Looking at Adherent Rates</h4>
              </div>
              <div class="container col s8">
                <Chart
                    graph_id="ReligionChart"
                    chartType="GeoChart"
                    data={this.state.data}
                    options={this.state.options}
                    legend_toggle={true}
                    width={"100%"}
                    height={"100%"}
                />
              </div>
              <div class="card sticky-action col s4">
                <div class="card-image">
                  <img src={require('./teen_pregnancy_2010.png')}/>
                </div>
                  <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">
                          The impact of religion (2010)
                          <i class="material-icons right">more_vert</i>
                      </span>
                      <p class="section">
                          Researchers, such as Joseph Strayhorn from the University of Pittsburgh, believe to
                          have found a link between teenage birth rates and strongly religious people. The
                          teen pregnancy rate is actually higher among those communities. Possible explanations are
                          the <b>discouragement of abortions</b> or the use of <b>contraception</b>. But
                          religion does not seem to solve our 2007 incident.
                      </p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title activator grey-text text-darken-4">
                        The impact of religion
                        <i class="material-icons right">close</i>
                    </span>
                    <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2758825/">Source </a>
                    Religiosity and teen birth rate in the United States by Joseph M. and Jillian C. Strayhorn, 2009</p>
                    <p><a href="http://www.usreligioncensus.org/compare.php">Dataset: </a>
                    ASARB (Association of Statisticans of American Religious Bodies): U.S. Religion Census 1952 to 2010, List of State Data from 2010</p>
                  </div>
              </div>
          </div>
        );
    }
}
