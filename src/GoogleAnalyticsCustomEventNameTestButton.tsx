import React from 'react'

import { pushGA4EventName } from './utils'

const GoogleAnalyticsCustomEventNameTestButton = () => {
  const handleClick = () => {
    pushGA4EventName({
      event_name: 'login_popup_click',
      method: 'email',
    })
  }

  return <button onClick={handleClick}>Google Analytics Custom Event Name Test Button</button>
}

export default GoogleAnalyticsCustomEventNameTestButton
