import React, { Component } from 'react';

export default class FundingOnStateLevel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <h2 class="header center">FundingOnStateLevel</h2>
                        </div>
                    </div>
                    <div class="section lower">
                        <p class="text">Abstinence-Only Education vs Comprehensive Sex Education
                                        In an effort to reduce teenage pregnancy rates the U.S. government has funded abstinence-only sex education programs for more than a decade. 

                                        Abstinence-only sex education is a form of sex education that teaches not having sex outside of marriage. 

                                        It often exclude other types of reproductive health education e.g. birth control and safe sex an. 
                        </p>
                    </div>
                </div>
      </div>
    );
  }
}
