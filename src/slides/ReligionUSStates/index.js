import React, { Component } from 'react';

export default class ReligionUSStates extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
      <div class="container">
          <div class="section no-pad-bot">
              <h2 class="header center">Religion</h2>
          </div>
              <div class="section col s4">
              <div class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                  </div>
                  <div class="card-content">
                      <h5>
                      In average, Americans seem to be more religious than Europeans, whereby we can see variations between the different states as well. Those religions opinions and their supporters way of living them out are so diversified though, that we shouldn’t expect correlations between pure adherent numbers and the teen pregnancy rates.
                                        We have to dig deeper:
                      </h5>
                  </div>
                  <div class="card-action">
                      <a>What happend in 2007?</a>
                  </div>
                  <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive
                          <i class="material-icons right">close</i></span>
                  </div>
                  </div>
          </div>
          </div>
      </div>
    );
  }
}
