type EmailEvent = 'login_email_back_click' | 'login_email_forget_password_click'
type EmailEventParameters = {
  event: EmailEvent
}

type ForgetPasswordEvent = 'login_forget_password_back_click' | 'login_forget_password_ok_click'
type ForgetPasswordEventParameters = {
  event: ForgetPasswordEvent
}

type LoginMethodClickEvent = 'login_popup_click'
type Method = 'email'
type LoginMethodClickEventParameters = {
  event: LoginMethodClickEvent
  method: Method
}

type PopupControlEvent = 'login_popup_close_click'
type PopupControlEventParameters = {
  event: PopupControlEvent
}

type PopupImpressionEvent = 'login_popup_imp'
type TriggerPoint = 'pop up open button'
type PopupImpressionEventParameters = {
  event: PopupImpressionEvent
  trigger_point: TriggerPoint
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
