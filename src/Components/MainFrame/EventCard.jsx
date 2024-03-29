import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from "./css/EventCard.module.css";

function EventCard({ event }) {

  const { image, title, organization, description, date } = event;
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    // const eventCardView = document.getElementsByClassName(".eventCardContent");
    // eventCardView.style.display = "block";
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    const eventCardDisableView = document.getElementsByClassName(".eventCardContent");
    eventCardDisableView.style.display = "none";
    setShowDetails(false);
  };

  return (
    <div>
      <div className={Card.eventCard}>
        
        <div
          className={Card.eventCardImageContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <img 
              src={image} 
              alt={title} 
              className={Card.eventCardImage} 
            />
            <div className={Card.eventCardImageOverlay}>
              <h2 className={Card.eventCardTitle}>{title}</h2>
            </div>
        </div>
        
        {/* Conditionally render event details based on showDetails state */}
        {showDetails && (
          <div className={Card.eventCardContent} onMouseEnter={handleMouseEnter}>
              <div className={Card.eventCardDetails}>
                <h2 className={Card.eventCardTitle}>{title}</h2>
                <p className={Card.eventCardOrganization}>{organization}</p>
                <p className={Card.eventCardDescription}>{description}</p>
                <p className={Card.eventCardDate}>{date}</p>
              </div>
          </div>
        )}
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
