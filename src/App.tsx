import React, { useEffect } from 'react'

import Title from './Title'
import TriggerPopupButton from './TriggerPopupButton'
import { pushGA4CustomDimension } from './utils'

const App = () => {
  useEffect(() => {
    pushGA4CustomDimension({
      custom_dimension: {
        userPropertyForAllPagesDefinedInGA: 'user property for all pages defined in GA',
        userPropertyForCustomTrackingDefinedInGA: 'user property for custom tracking defined in GA',
        userPropertyForAllPagesNotDefinedInGA: 'user property for all pages not defined in GA',
        userPropertyForCustomTrackingNotDefinedInGA: 'user property for custom tracking not defined in GA',
      },
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
