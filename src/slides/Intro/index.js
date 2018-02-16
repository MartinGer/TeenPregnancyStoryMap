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
                                   <h3> Teenage Pregnancy in the USA and factors influencing its occurence</h3></span>
                                <p>
                                    We want to have a look on pregnant teenage girls of the age of 15 to 19 
                                    whereby those normally haven’t completed their core education—secondary 
                                    school—have few or no marketable skills, are financially dependent upon 
                                    her parents and/or continue to live at home. Often they are no mentally 
                                    mature enough to raise a child on their own, which leads to problems for 
                                    the mother as well as for the child.   
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Teenage Pregnancy in the USA and factors influencing its occurence</span>
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
                                    Educational Issues</span>                     
                                <p> - only 40% finish their high school degrees </p>
                                <p> - college completion reduced by 65% </p>    
                                <p> </p>                      
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
                                    Health Issues</span>
                                
                                <p> - high risk of anaemia & blood pressure</p>
                                <p> - premature birth and depression</p>
                                
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
                                    Financial Issues</span>
                        
                                <p>   - medical care for mother and her child </p>
                                <p>   - child care and baby accessories </p>
                                <p> </p>  
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
                                    Social Issues</span>
                                <p> - suffering of self-identity development</p>      
                                <p> - strained relationships with parents & friends
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        );
  }
}
