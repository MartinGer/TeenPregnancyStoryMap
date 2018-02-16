import React, { Component } from 'react';
import './index.css'

export default class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
        return (
            <div class="Intro">

                <div class="container">
                <div class="containerIntro">
                        <div class="card sticky-action col s12">


                            <div class="card-content">

                                <span class="card-title activator grey-text text-darken-4">
                                   <h4> Teenage Pregnancy in the USA <br></br>and factors influencing its occurence</h4>
                                </span>
                                <p>
                                    We want to have a look on pregnant teenage girls at the age of 15 to 19.
                                    These girls normally have not completed their core education — secondary
                                    school — have few or no marketable skills, are financially dependent upon
                                    her parents and/or continue to live at home. Often they are not mentally
                                    mature enough to raise a child on their own, which may lead to problems for
                                    the mother as well as for the child.
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                  Teenage Pregnancy in the USA and factors influencing its occurence
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="section no-pad-bot">
                        <h3 class="center"></h3>
                    </div>

                    <div class="row center">
                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Education</span>
                                    Risk of education gaps
                                    <ul>
                                <li>- Only 40% complete high school degrees</li>
                                <li>- College completion is reduced by 65%</li>
                              </ul>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Educational problems</span>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Health</span>
                                    High risk of
                                <ul>
                                <li>- Anaemia</li>
                                <li>- Blood pressure</li>
                                <li>- Premature birth</li>
                                <li>- Depression</li>
                              </ul>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive</span>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Finance</span>
                                    Increased expenses for
                                <ul>
                                <li>- Medical care for mother and her child </li>
                                <li>- Child care and baby accessories </li>
                              </ul>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive</span>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Social Life</span>

                                    Risks of
                                <ul>
                                  <li>- Disturbed self-identitification</li>
                                  <li>- Strained relationships with parents and friends</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        );
  }
}
