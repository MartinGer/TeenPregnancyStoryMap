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
                    <div class="section col s6 push-s1">
                        <div class="cardOutlook">
                            <div class="card">
                                <div class="card-content card-overflow">
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
                                    <p>
                                        Professor David Paton from the University of Nottingham looked at a similar decline in the UK
                                        and suggested, that also the emergence of social media could have been an influencing factor,
                                        as this phenomenon was observed accross multiple countries and a change in teenage behavior 
                                        might have lead also to other declining trends, such as a declining alcohol usage among teens. 
                                        He also acknowledges that an <a href="http://www.telegraph.co.uk/news/health/news/12189376/How-teenage-pregnancy-collapsed-after-birth-of-social-media.html">
                                         improved education system might have been a potential influence factor.</a>
                                    </p>
                                    <span class="card-title activator grey-text text-darken-4">
                                       <h4>Where will it lead to?</h4>
                                    </span>
                                    <p class="section">
                                        After we have seen a strong increase in nation-wide comprehensive sex education in the USA,
                                        the Trump administration has <b> cut nearly $214 million</b> from teen pregnancy prevention programs in 2017.

                                        More than <b>80 organizations could lose Obama-era grants</b> from the US
                                        Department of Health and Human Services. This might have an impact on the correct usage and access to contraception
                                        and therefore could impact the teenage pregnancy rate in the years to come.
                                    </p>
                                </div>

                                <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">
                                    How will the Teenage Pregnancy rate develop in the future?
                                    <i class="material-icons right">close</i>
                                </span>
                                    <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5498007/">Understanding the Decline in Adolescent Fertility in the United States, 2007–2012. Lindberg, Santelli Desai. Aug 2016.</a></p>
                                    <p><a href="http://www.telegraph.co.uk/news/health/news/12189376/How-teenage-pregnancy-collapsed-after-birth-of-social-media.html">Telegraph: How teenage pregnancy collapsed after birth of social media, John Bingham. Mar 09, 2016.</a></p>
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
