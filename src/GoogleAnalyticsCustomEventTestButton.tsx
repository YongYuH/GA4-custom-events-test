import React from 'react'

import { pushGA4Event } from './utils'

const GoogleAnalyticsCustomEventTestButton = () => {
  const handleClick = () => {
    pushGA4Event({
      event: 'login_popup_click',
      method: 'email',
    })
  }

  return <button onClick={handleClick}>Google Analytics Custom Event Test Button</button>
}

export default GoogleAnalyticsCustomEventTestButton
