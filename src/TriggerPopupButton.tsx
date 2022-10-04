import { styled } from '@linaria/react'
import React from 'react'
import Modal from 'react-modal'

import { pushGA4Event } from './utils'

const PopupCloseButton = styled.button`
  position: absolute;
  right: 16px;
`

const FormElementWrapper = styled.div`
  padding: 4px 0;
`

type StepType = 'initial' | 'email' | 'forgetPassword'

const TriggerPopupButton = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [stepType, setStepType] = React.useState<StepType>('initial')

  const handleClick = () => {
    setIsModalOpen(true)
    pushGA4Event({
      event: 'login_popup_imp',
      trigger_point: 'pop up open button',
    })
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    pushGA4Event({
      event: 'login_popup_close',
      trigger_point: 'pop up close button',
    })
  }

  const handleGoToEmailStep = () => {
    setStepType('email')
    pushGA4Event({
      event: 'login_popup_click',
      trigger_point: 'email button',
    })
  }

  const handleEmailStepForgetPasswordButtonClick = () => {
    setStepType('forgetPassword')
    pushGA4Event({
      event: 'login_email_forget_password_click',
    })
  }

  const handleEmailStepBackButtonClick = () => {
    setStepType('initial')
    pushGA4Event({
      event: 'login_email_back_click',
    })
  }

  const handleForgetPasswordStepOKButtonClick = () => {
    pushGA4Event({
      event: 'login_forget_password_ok_click',
    })
  }

  const handleForgetPasswordStepBackButtonClick = () => {
    setStepType('email')
    pushGA4Event({
      event: 'login_forget_password_back_click',
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Click here to open pop-up with custom events</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <PopupCloseButton onClick={handleModalClose}>x</PopupCloseButton>
        {stepType === 'initial' && (
          <>
            <h1>Initial</h1>
            <FormElementWrapper>
              <button onClick={handleGoToEmailStep}>Sign in with Email</button>
            </FormElementWrapper>
          </>
        )}
        {stepType === 'email' && (
          <>
            <h1>Email</h1>
            <FormElementWrapper>
              <input placeholder="email" />
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleEmailStepForgetPasswordButtonClick}>Forget Password</button>
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleEmailStepBackButtonClick}>Back</button>
            </FormElementWrapper>
          </>
        )}
        {stepType === 'forgetPassword' && (
          <>
            <h1>Forget Password</h1>
            <FormElementWrapper>
              <button onClick={handleForgetPasswordStepOKButtonClick}>OK</button>
            </FormElementWrapper>
            <FormElementWrapper>
              <button onClick={handleForgetPasswordStepBackButtonClick}>Back</button>
            </FormElementWrapper>
          </>
        )}
      </Modal>
    </div>
  )
}

export default TriggerPopupButton
