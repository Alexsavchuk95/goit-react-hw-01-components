import React from 'react';
import PropTypes from 'prop-types';
import styles from './friend.module.css';
import FriendListItem from './FriendListItem/friend-list-item';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(elem => (
      <FriendListItem
        key={elem.id}
        avatar={elem.avatar}
        name={elem.name}
        isOnline={elem.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
