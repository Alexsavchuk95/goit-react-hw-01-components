import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friend.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={styles.listItem}>
    {isOnline ? (
      <span className={styles.statusOn} />
    ) : (
      <span className={styles.statusOff} />
    )}
    <img className={styles.avatar} src={avatar} alt="img" />
    <p>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
