import React from 'react';
import PropTypes from 'prop-types';
import styles from './social.module.css';

const SocialProfile = ({ user: { name, tag, location, avatar, stats } }) => (
  <div className={styles.profile}>
    <div>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.label}>
        <span>Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li className={styles.label}>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li className={styles.label}>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

SocialProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default SocialProfile;
