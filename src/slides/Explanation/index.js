import React, {Component} from 'react';
import './index.css'

export default class Explanation extends Component {
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
                                       <h4>What caused the decline in 2007?<i class="material-icons right">more_vert</i></h4>
                                    </span>
                                    <p class="section">
                                        As the policy changes in the US were introduced by the Obama administration in 2009,
                                        it <b>cannot directly explain our initial declining trend in 2007</b>. Researchers Lindberg et al. 
                                        used a logistic regression model to investigate the decline between 2007 and 2012 
                                        and mainly contribute the trend to an <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5498007/">
                                        improved usage of contraception</a>.
                                    </p>
                                    <p>
                                        They also state that <a>"since contraceptive use is the critical driver of adolescent fertility, 
                                        it is important to ensure adolescents’ access to comprehensive sexuality education that provides medically 
                                        accurate information about contraception."</a>
                                    </p>
                                    <p class="section">
                                        Professor David Paton from the University of Nottingham looked at a similar decline in the UK
                                        and suggested, that also the emergence of social media could have been an influencing factor,
                                        as this phenomenon was observed accross multiple countries and a change in teenage behavior 
                                        might have also lead to other declining trends, such as a declining alcohol usage among teens. 
                                        Further, he acknowledges that an <a href="http://www.telegraph.co.uk/news/health/news/12189376/How-teenage-pregnancy-collapsed-after-birth-of-social-media.html">
                                         improved education system might have been a potential influence factor</a>, but comes to the
                                         conclusion that there might not have been only a single factor causing the decline in 2007.
                                    </p>
                                </div>

                                <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    What caused the decline in 2007?
                                    <i class="material-icons right">close</i>
                                </span>
                                    <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5498007/">Understanding the Decline in Adolescent Fertility in the United States, 2007–2012. Lindberg, Santelli Desai. Aug 2016.</a></p>
                                    <p><a href="http://www.telegraph.co.uk/news/health/news/12189376/How-teenage-pregnancy-collapsed-after-birth-of-social-media.html">Telegraph: How teenage pregnancy collapsed after birth of social media, John Bingham. Mar 09, 2016.</a></p>
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
