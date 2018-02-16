import React, {Component} from 'react';
import './index.css'

export default class ReligionUSStates extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div class="religion">
                <div class="container section
                 row">
                    <div class="card col s8">
                    </div>
                    <div class="card col s4">
                        <div class="card-image">
                            <img src={require('./teen_pregnancy_2010.png')}/>
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">
                                The impact of religion
                            </span>

                            <p class="section">
                                Researchers, such as Joseph Strayhorn from the University of Pittsburgh believe to
                                have found a link between teenage birth rates and strongly religious people. The
                                teen pregnancy rate is actually higher among those communities. Possible explanations a
                                re the <b>discouragement of abortions</b> or the use of <b>contraception</b>. But
                                religion does not seem to solve our 2007 incident.
                            </p>
                        </div>
                    </div>

                    <div class="card-reveal">

                    </div>
                </div>
            </div>
        );
    }
}
