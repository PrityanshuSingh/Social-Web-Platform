import Card from "./styles/ChannelCard.module.css"
import PropTypes from 'prop-types';

function ChannelCard({ id, imageUrl, title }) {
  return (
    <div className={Card.channelCard}>
      <img
        id={id}
        loading="lazy"
        srcSet={imageUrl}
        className={Card.channelCardImg}
        alt={title}
      />
      <div className={Card.channelCardTitle}>{title}</div>
      <div className={Card.channelCardButton}>View Channel</div>
    </div>
  );
}

ChannelCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChannelCard;
