import React, { Component } from 'react';
import './index.css'

export default class ReligionUSStates extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class = "Religion">
      <div class="container">
      <div class ="box_teenrate">
              <div class="row">
              {/* <div class="card col s4 push-s10">
                      <h5>
                        Teenage Pregnancy rate
                      </h5>
                  </div> */}
          </div>
          </div>
      <div class ="box_religion2010">
              <div class="section col s12">
              <div class="card">
                  <div class="card-content">
                      Even though we can see variations between the different states,
                      US-Americans seem to be, on average, more religious than Europeans.
                      However, the culture of the different religions and their supporters way of living them out are so diversified
                      that we shouldn’t expect correlations between pure adherent numbers and the teen pregnancy rates.
                      <br></br>
                      We have to dig deeper.
                  </div>
                  </div>
          </div>
          </div>
          </div>
      </div>
    );
  }
}
