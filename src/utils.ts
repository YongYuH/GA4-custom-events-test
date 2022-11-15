type EventName = 'tracking'

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
  customized_parameters: LoginMethodClickCustomizedParameters
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
  customized_parameters: PopupImpressionCustomizedParameters
}

type PushGA4EventArgs =
  | EmailEventParameters
  | ForgetPasswordEventParameters
  | LoginMethodClickEventParameters
  | PopupControlEventParameters
  | PopupImpressionEventParameters

export function pushGA4Event(args: PushGA4EventArgs): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  dataLayer.push(args)
}
