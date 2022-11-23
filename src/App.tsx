import React, { useEffect } from 'react'

import Title from './Title'
import TriggerPopupButton from './TriggerPopupButton'
import { pushDataLayerPageVariables } from './utils'

const App = () => {
  useEffect(() => {
    pushDataLayerPageVariables({
      allPagesInGA: 'all pages in GA',
      allPagesNotInGA: 'all pages not in GA',
      customTrackingInGA: 'custom tracking in GA',
      customTrackingNotInGA: 'custom tracking not in GA',
    })
  }, [])

  return (
    <>
      <Title title="GA 4 Custom Events Test" />
      <TriggerPopupButton />
    </>
  )
}

export default App
