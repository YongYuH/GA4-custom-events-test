type EventName = 'tracking'

const keyOfCustomParameters = 'customized_parameters'

type ClearCustomParameters = {
  [keyOfCustomParameters]: undefined
}

type EmailSubCategory = 'email_back' | 'email_forget_password'
type EmailEventParameters = {
  event: EventName
  category: 'login'
  sub_category: EmailSubCategory
  user_action: 'click'
}

type ForgetPasswordSubCategory = 'forget_password_back' | 'forget_password_ok'
type ForgetPasswordEventParameters = {
  event: EventName
  category: 'login'
  sub_category: ForgetPasswordSubCategory
  user_action: 'click'
}

type LoginMethodSubCategory = 'popup'
type Method = 'email'
type LoginMethodClickCustomizedParameters = {
  method: Method
}
type LoginMethodClickEventParameters = {
  event: EventName
  category: 'login'
  sub_category: LoginMethodSubCategory
  user_action: 'click'
  [keyOfCustomParameters]: LoginMethodClickCustomizedParameters
}

type PopupControlSubCategory = 'popup_close'
type PopupControlEventParameters = {
  event: EventName
  category: 'login'
  sub_category: PopupControlSubCategory
  user_action: 'click'
}

type PopupImpressionSubCategory = 'popup'
type TriggerPoint = 'pop up open button'
type PopupImpressionCustomizedParameters = {
  trigger_point: TriggerPoint
}
type PopupImpressionEventParameters = {
  event: EventName
  category: 'login'
  sub_category: PopupImpressionSubCategory
  user_action: 'imp'
  [keyOfCustomParameters]: PopupImpressionCustomizedParameters
}

type PushGA4EventParameters =
  | ClearCustomParameters
  | EmailEventParameters
  | ForgetPasswordEventParameters
  | LoginMethodClickEventParameters
  | PopupControlEventParameters
  | PopupImpressionEventParameters

type PushGA4EventOption = {
  onDataLayerPushed?: () => void
}

export function pushGA4Event(parameters: PushGA4EventParameters, option?: PushGA4EventOption): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  dataLayer.push(parameters)

  if (option?.onDataLayerPushed) {
    option.onDataLayerPushed()
  }
}

type PushDataLayerPageVariablesParameters = {
  allPagesInGA: 'all pages in GA'
  allPagesNotInGA: 'all pages not in GA'
  customTrackingInGA: 'custom tracking in GA'
  customTrackingNotInGA: 'custom tracking not in GA'
}

export function pushDataLayerPageVariables(parameters: PushDataLayerPageVariablesParameters): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  dataLayer.push({
    page: parameters,
  })
}
