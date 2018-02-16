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
                        </div>
                    </div>
                    <div class="section no-pad-bot">
                        <h3 class="center">&nbsp;</h3>
                    </div>

                    <div class="row center">
                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">Education
                                     <i class="material-icons right">more_vert</i>
                                </span>
                                Risk of education gaps
                                <ul>
                                    <li>- Only 40% complete high school degrees</li>
                                    <li>- College completion is reduced by 65%</li>
                                </ul>
                            </div>
                            <div class="card-reveal left-align">
                                <span class="card-title grey-text text-darken-4">Education
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>TODO Add sources</p>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Health
                                    <i class="material-icons right">more_vert</i>
                                </span>
                                Risk of
                                <ul>
                                    <li>- Anaemia</li>
                                    <li>- High blood pressure</li>
                                    <li>- Premature birth</li>
                                    <li>- Depression</li>
                                </ul>
                            </div>
                            <div class="card-reveal left-align">
                                <span class="card-title grey-text text-darken-4">Health
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>TODO Add sources</p>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Finance
                                    <i class="material-icons right">more_vert</i>
                                </span>
                                Increased expenses for
                                <ul>
                                    <li>- Medical care for mother and her child</li>
                                    <li>- Child care and baby accessories</li>
                                </ul>
                            </div>
                            <div class="card-reveal left-align">
                                <span class="card-title grey-text text-darken-4">Finance
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>TODO Add sources</p>
                            </div>
                        </div>

                        <div class="card intro sticky-action col s3">
                            <div class="card-image waves-effect waves-block waves-light">
                            </div>
                            <div class="card-content left-align">
                                <span class="card-title activator grey-text text-darken-4">
                                    Social Life
                                    <i class="material-icons right">more_vert</i>
                                </span>

                                Risk of
                                <ul>
                                    <li>- Disturbed self-identitification</li>
                                    <li>- Strained relationships with parents and friends</li>
                                </ul>
                            </div>
                            <div class="card-reveal left-align">
                                <span class="card-title grey-text text-darken-4">Social Life
                                    <i class="material-icons right">close</i>
                                </span>
                                <p>TODO Add sources</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
