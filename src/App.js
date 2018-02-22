import React, {Component} from 'react';
import './App.css';
import TeenPregnancyWorldwide from './slides/TeenPregnancyWorldwide'
import TeenPregnancyUSStates from './slides/TeenPregnancyUSStates'
import ReligionUSStates from './slides/ReligionUSStates'
import Headline from './slides/Headline'
import Intro from './slides/Intro'
import FundingChart from './slides/FundingChart'
import FundingOnStateLevel from './slides/FundingOnStateLevel'
import Explanation from "./slides/Explanation";
import Outlook from './slides/Outlook'
import {ScrollContainer, ScrollSection} from "./components/OnePageScroll";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EthnicityUSStates from "./slides/EthnicityUSStates";

class App extends Component {

   constructor() { super(); this.state = {}; }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <ScrollContainer ref={sc => !this.state.sc && this.setState({ sc })}>
                        <ScrollSection pageId={0}>
                            <div className='full-height green-background'>
                                <Headline/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={1}>
                            <div className='full-height green-background'>
                                <Intro/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={2}>
                            <div className='full-height green-background'>
                                <TeenPregnancyWorldwide scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={3}>
                            <div className='full-height yellow-background'>
                                <TeenPregnancyUSStates scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={4}>
                            <div className='full-height yellow-background'>
                                <EthnicityUSStates scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={5}>
                            <div className='full-height yellow-background'>
                                <ReligionUSStates scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={6}>
                            <div className='full-height yellow-background'>
                                <FundingOnStateLevel scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={7}>
                            <div className='full-height yellow-background'>
                                <FundingChart scrollContainer={this.state.sc}/>
                            </div>
                        </ScrollSection>

                        <ScrollSection pageId={8}>
                            <div className='full-height yellow-background'>
                                <Explanation/>
                            </div>
                        </ScrollSection>
                        <ScrollSection pageId={9}>
                            <div className='full-height yellow-background'>
                                <Outlook/>
                            </div>
                        </ScrollSection>
                    </ScrollContainer>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
