type PopupEvent = 'login_popup_click' | 'login_popup_close' | 'login_popup_imp'
type TriggerPoint = 'pop up open button' | 'email button' | 'pop up close button'
type PopupEventParameters = {
  event: PopupEvent
  trigger_point: TriggerPoint
}

type EmailEvent = 'login_email_back_click' | 'login_email_forget_password_click'
type EmailEventParameters = {
  event: EmailEvent
}

type ForgetPasswordEvent = 'login_forget_password_back_click' | 'login_forget_password_ok_click'
type ForgetPasswordEventParameters = {
  event: ForgetPasswordEvent
}

type PushGA4EventArgs = PopupEventParameters | EmailEventParameters | ForgetPasswordEventParameters

export function pushGA4Event(args: PushGA4EventArgs): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  dataLayer.push(args)
}
