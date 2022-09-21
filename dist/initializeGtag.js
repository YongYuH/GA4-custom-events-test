window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments)
}

function initializeGtag() {
  const GoogleAnalytics4MeasurementID = 'G-E13KF3JV7Y'
  const GoogleAnalyticsUAMeasurementID = 'UA-242012534-1'

  gtag('js', new Date())
  gtag('config', GoogleAnalyticsUAMeasurementID)
  gtag('config', GoogleAnalytics4MeasurementID)
}

initializeGtag()