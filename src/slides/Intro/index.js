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
                                <p><a href="http://www.ncsl.org/research/health/teen-pregnancy-affects-graduation-rates-postcard.aspx">Source </a>
                                National Conference of State Legislature: Teen Pregnancy affects Graduation rates Jun 17, 2013</p>
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
                                <p><a href="http://www.momjunction.com/articles/health-risks-of-teenage-pregnancy_00377831/#gref">Source </a>
                                9 Health Risks and Realities Of Teenage Pregnancy by Debolina Raja Feb 12, 2017</p>
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
                                <p><a href="http://www.onlymyhealth.com/financial-problems-teenage-pregnancy-1345312849">Source </a>
                                Onlymyhealth: Financial Problems of Teenage Pregnancy by Bhadra Kamalasanan Aug 18, 2012</p>
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
                                <p><a href="https://books.google.ca/books?id=oQgvAAAAQBAJ&dq=parent+child+relations+3rd+edition&hl=en&sa=X&ei=85bZVMO5EIbnoATGqIKgCQ&ved=0CDEQ6AEwAA">Source </a>
                                Parent-Child Relations, Pearson Education, Feb 02, 2012</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
