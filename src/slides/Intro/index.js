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
                    <div class="center">
                        <div class="card sticky-action col s12">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p></p>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Teenage Pregnancy in the USA and factors influencing its occurence
                                    <i class="material-icons right">more_vert</i></span>
                                <p>
                                    We want to have a look on pregnant teenage girls of the age of 15 to 19 
                                    whereby those normally haven’t completed their core education—secondary 
                                    school—have few or no marketable skills, are financially dependent upon 
                                    her parents and/or continue to live at home. Often they are no mentally 
                                    mature enough to raise a child on their own, which leads to problems for 
                                    the mother as well as for the child. In the following the 3 
                                    
                                </p>
                            </div>
                            <div class="card-action">
                                <a href="#" onClick={() => this.loadState('01')}>Educational Problems</a>
                                <a href="#" onClick={() => this.loadState('11')}>Health issues</a>
                                <a href="#" onClick={() => this.loadState('39')}>Direct financially</a>
                                <a href="#" onClick={() => this.loadState('39')}>Socially</a>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Teenage Pregnancy in the USA and factors influencing its occurence
                                    <i class="material-icons right">close</i></span>
                                <p>
                                    Sources...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="section no-pad-bot">
                        <h3 class="center">Effects of Teen Pregnancy</h3>
                    </div>

                    <div class="row center">
                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p></p>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Educational Issues
                                    <i class="material-icons right">more_vert</i></span>
                                <p>
                                  only 40% finish high school degree
                                  college completion reduced by 65%
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Educational problems
                                    <i class="material-icons right">close</i></span>
                                <p>
                                    
                                </p>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p></p>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Health issues
                                    <i class="material-icons right">more_vert</i></span>
                                <p>
                                    high risk of anaemia & blood pressure
                                    premature birth and depression
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive
                                    <i class="material-icons right">close</i></span>
                                <p>
                                    Sources...
                                </p>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p></p>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Direct financial
                                    <i class="material-icons right">more_vert</i></span>
                                <p>
                                    medical care for mother & child
                                    child care and baby accessories
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive
                                    <i class="material-icons right">close</i></span>
                                <p>
                                    Sources...
                                </p>
                            </div>
                        </div>

                        <div class="card sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                                <p></p>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">
                                    Social Issues
                                    <i class="material-icons right">more_vert</i></span>
                                <p>
                                  self-identity develop suffers
                                  strained relationships with parents & friends
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive
                                    <i class="material-icons right">close</i></span>
                                <p>
                                    Sources...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}
