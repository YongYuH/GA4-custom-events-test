import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { initializeGtag } from './utils'

initializeGtag()

const renderApp = () => {
  render(<App />, document.getElementById('root'))
}

renderApp()
