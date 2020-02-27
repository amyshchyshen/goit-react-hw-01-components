import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; i += 1) {
    rgb.push(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
  }

  return `rgb(${rgb.join(',')})`;
};

const Stats = ({ title, stats }) => {
  return (
    <section className={styles['stats-section']}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={styles.item}
              style={{ backgroundColor: `${getRandomColor()}` }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: 'Statistics',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
