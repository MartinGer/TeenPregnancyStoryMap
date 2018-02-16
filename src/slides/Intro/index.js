import React, {Component} from 'react';
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
                                   <h3>What is teen pregnancy and why is it problematic?</h3></span>
                                <p>
                                    The World Health Organization defines teen or adolescent pregnancy as pregnancy of
                                    <b> females under 20</b>. Pregnancy in early stages of a young adult's life bears
                                    not only health risks, but also several social and economic consequences.
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
                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Educational Issues</span>
                                <p> - Only 40% finish their high school degrees </p>
                                <p> - College completion reduced by 65% </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Educational problems</span>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Health Issues</span>

                                <p> - High risk of anaemia & blood pressure</p>
                                <p> - Premature birth and depression</p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive</span>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Financial Issues</span>

                                <p> - Medical care for mother and her child </p>
                                <p> - Child care and baby accessories </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Abstinence-Only vs Comprehensive</span>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Social Issues</span>
                                <p> - Suffering of self-identity development</p>
                                <p> - Strained relationships with parents & friends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
