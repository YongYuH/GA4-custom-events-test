window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments)
}

function initializeGtag() {
  const GoogleAnalytics4MeasurementID = 'G-GN65ZYWGJZ'
  const GoogleAnalyticsUAMeasurementID = 'UA-242022426-1'

  gtag('js', new Date())
  gtag('config', GoogleAnalyticsUAMeasurementID)
  gtag('config', GoogleAnalytics4MeasurementID, { 'debug_mode': true })
}

initializeGtag()