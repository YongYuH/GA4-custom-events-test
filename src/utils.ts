function gtag(...gtagParameters) {
  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push(gtagParameters)
}

export function initializeGtag(): void {
  const GoogleAnalyticsMeasurementID = 'G-0NS23S5KS9'
  gtag('js', new Date())
  gtag('config', GoogleAnalyticsMeasurementID)
}

interface PushGA4EventArgs {
  campaignName?: string
  event: string
  followName?: string
  followType?: string
  method?: string
  newsletterName?: string
  paywallType?: string
  triggerPoint?: string
}

export function pushGA4Event(args: PushGA4EventArgs): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  const {
    campaignName,
    event,
    followName,
    followType,
    method,
    newsletterName,
    paywallType,
    triggerPoint,
  } = args

  const requiredParameters = {
    event,
  }

  const optionalParameters = {
    ...(campaignName ? { campaign_name: campaignName } : {}),
    ...(followName ? { follow_name: followName } : {}),
    ...(followType ? { follow_type: followType } : {}),
    ...(method ? { method: method } : {}),
    ...(newsletterName ? { newsletter_name: newsletterName } : {}),
    ...(paywallType ? { paywall_type: paywallType } : {}),
    ...(triggerPoint ? { trigger_point: triggerPoint } : {}),
  }

  const parameters = {
    ...requiredParameters,
    ...optionalParameters,
  }

  gtag(parameters)
}
