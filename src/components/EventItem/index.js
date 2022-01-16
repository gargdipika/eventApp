// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetail, onClickEventItem} = props
  const {imageUrl, name, location, registrationStatus} = eventDetail
  const onClickEvent = () => {
    onClickEventItem(registrationStatus)
  }

  return (
    <li className="list-item-style">
      <button type="button" className="image-button" onClick={onClickEvent}>
        <img className="image" src={imageUrl} alt="event" />
      </button>

      <p className="heading-name" onClick={onClickEvent}>
        {name}
      </p>
      <p onClick={onClickEvent}>{location}</p>
    </li>
  )
}

export default EventItem
