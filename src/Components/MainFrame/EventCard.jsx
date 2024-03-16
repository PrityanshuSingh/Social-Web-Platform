import PropTypes from 'prop-types';
import Card from "./css/EventCard.module.css";

function EventCard({ event }) {

  const { image, title, organization, description, date } = event;

  return (
    <div>
      <div className={Card.eventCard}>
        <div className={Card.eventCardContent}>
          <div className={Card.eventCardImageContainer}>
            <img 
              src={image} 
              alt={title} 
              className={Card.eventCardImage} />

            <div className={Card.eventCardDetails}>
              <h2 className={Card.eventCardTitle}>{title}</h2>
              <p className={Card.eventCardOrganization}>{organization}</p>
              <p className={Card.eventCardDescription}>{description}</p>
              <p className={Card.eventCardDate}>{date}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
