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
                        <div class="cardOutlook">
                            <div class="card">
                                <div class="card-content">
                                    <span class="card-title activator grey-text text-darken-4">
                                       <h4>How will the Teenage Pregnancy rate develop in the future?<i class="material-icons right">more_vert</i></h4>
                                    </span>
                                    <p class="section">
                                        We have seen a strong increase in nation-wide comprehensive sex education in the USA over the last couple of years.
                                        Even though we could not find a correlation between comprehensive sex education and teen pregnancy in our dataset,
                                        other studies have suggested that the education policy might have an indirect effect.
                                        
                                        The Trump administration has <b> cut nearly $214 million</b> from teen pregnancy prevention programs in 2017.

                                        More than <b>80 organizations could lose Obama-era grants</b> from the US
                                        Department of Health and Human Services. This might have an impact on the correct usage and access to contraception
                                        and therefore could impact the teenage pregnancy rate in the years to come.
                                    </p>
                                    <p class="section">
                                        <i>A story map by Martin Gerstmaier, Philipp Hager, Sven Lehmann, Hung Nguyen</i>
                                    </p>
                                </div>

                                <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    How will the Teenage Pregnancy rate develop in the future?
                                    <i class="material-icons right">close</i>
                                </span>
                                    <p><a href="https://www.washingtonpost.com/news/to-your-health/wp/2018/02/15/planned-parenthood-sues-trump-administration-for-ending-grants-to-teen-pregnancy-programs/">
                                    The Washington Post: Nine organizations sue Trump administration for ending grants to teen pregnancy programs. Feb 15, 2018.</a></p>
                                    <p><a href="https://unsplash.com/photos/1HtojWDvEWE">Photo by Jomar, Unsplash.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
