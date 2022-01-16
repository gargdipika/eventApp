// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderYetToRegister = () => (
    <div>
      <img
        className="image_yet_to_registered"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div>
      <img
        className="image_registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div>
      <img
        className="image_yet_to_registered"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration soon!</p>
    </div>
  )

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      return renderYetToRegister()
    case 'REGISTERED':
      return renderRegistered()
    case 'REGISTRATIONS_CLOSED':
      return renderRegistrationClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
