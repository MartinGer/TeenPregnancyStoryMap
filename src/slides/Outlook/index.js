import React, {Component} from 'react';
import './index.css'

export default class Outlook extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div class="trump">
                <div class="row center">
                    <div class="section col s5 push-s1">
                        <div class="card">
                            <div class="cardOutlook">
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">
                                       <h4> How will the Teenage Pregnancy rate develop in the future? </h4>
                                        </span>
                                    <p class="section">
                                        The Trump administration has <b>cut nearly $214 million</b> from teen pregnancy
                                        prevention programs across the country.

                                        More than <b>80 organizations will lose Obama-era grants</b> from the US Department of
                                        Health and Human Services
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
