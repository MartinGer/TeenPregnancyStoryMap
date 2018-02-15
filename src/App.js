import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeenPregnancyWorldwide from './slides/TeenPregnancyWorldwide'
import TeenPregnancyUSStates from './slides/TeenPregnancyUSStates'
import ReligionUSStates from './slides/ReligionUSStates'
import Headline from './slides/Headline'
import Intro from './slides/Intro'
import FundingChart from './slides/FundingChart'
import FundingOnStateLevel from './slides/FundingOnStateLevel'
import Outlook from './slides/Outlook'
import { ScrollContainer, ScrollSection } from "./components/OnePageScroll";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <ScrollContainer>
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
              <TeenPregnancyWorldwide/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={3}>
            <div className='full-height yellow-background'>
              <TeenPregnancyUSStates/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={4}>
            <div className='full-height yellow-background'>
              <ReligionUSStates/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={5}>
            <div className='full-height yellow-background'>
              <FundingChart/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={6}>
            <div className='full-height yellow-background'>
              <FundingOnStateLevel/>
            </div>
          </ScrollSection>

          <ScrollSection pageId={7}>
            <div className='full-height yellow-background'>
              <Outlook/>
            </div>
          </ScrollSection>
        </ScrollContainer>
=======
        <MuiThemeProvider>
          <ScrollContainer>
            <ScrollSection pageId={0}>
              <div className='full-height green-background'>
                <TeenPregnancyWorldwide/>
              </div>
            </ScrollSection>

            <ScrollSection pageId={1}>
              <div className='full-height yellow-background'>
                <TeenPregnancyUSStates/>
              </div>
            </ScrollSection>

            <ScrollSection pageId={2}>
              <div className='full-height yellow-background'>
                <FundingChart/>
              </div>
            </ScrollSection>

            <ScrollSection pageId={3}>
              <div className='full-height yellow-background'>
                <FundingOnStateLevel/>
              </div>
            </ScrollSection>

            <ScrollSection pageId={4}>
              <div className='full-height yellow-background'>
                <Outlook/>
              </div>
            </ScrollSection>
          </ScrollContainer>
        </MuiThemeProvider>
>>>>>>> 86afc097c68374f12082ba27eb24dfefb2a9364f
      </div>
    );
  }
}

export default App;
