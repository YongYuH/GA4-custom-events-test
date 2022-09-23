import React from 'react'

import ButtonWrapper from './ButtonWrapper'
import GoogleAnalyticsCustomEventNameTestButton from './GoogleAnalyticsCustomEventNameTestButton'
import GoogleAnalyticsCustomEventTestButton from './GoogleAnalyticsCustomEventTestButton'

const App = () => {
  return (
    <div>
      <ButtonWrapper>
        <GoogleAnalyticsCustomEventTestButton />
      </ButtonWrapper>
      <ButtonWrapper>
        <GoogleAnalyticsCustomEventNameTestButton />
      </ButtonWrapper>
    </div>
  )
}

export default App
