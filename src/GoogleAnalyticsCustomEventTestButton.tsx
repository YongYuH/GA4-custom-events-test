import React from 'react'

const GoogleAnalyticsCustomEventTestButton = () => {
  const handleClick = () => {
    gtag('event', 'login_popup_click', {
      method: 'email',
    })
  }

  return <button onClick={handleClick}>Google Analytics Custom Event Test Button</button>
}

export default GoogleAnalyticsCustomEventTestButton
