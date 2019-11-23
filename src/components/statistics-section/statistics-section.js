import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const StatisticsSection = ({ stats }) => (
  <section className={styles.stats}>
    <h2>Upload stats</h2>

    <ul className={styles.listStats}>
      {stats.map(elem => (
        <li className={styles.item} key={elem.id}>
          <span className="label">{elem.label}</span>
          <span className="percentage">{elem.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default StatisticsSection;
