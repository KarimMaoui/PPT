import React from 'react';
import { Presentation } from './components/Presentation';
import { CoverSlide } from './slides/CoverSlide';
import { IntroSlide } from './slides/IntroSlide';
import { AnalyticsSlide } from './slides/AnalyticsSlide';
import { QuoteSlide } from './slides/QuoteSlide';
import { OutroSlide } from './slides/OutroSlide';

function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide key="cover" />,
        <IntroSlide key="intro" />,
        <AnalyticsSlide key="analytics" />,
        <QuoteSlide key="quote" />,
        <OutroSlide key="outro" />
      ]}
    />
  );
}

export default App;
