import React from 'react';
import styles from './styles.module.scss';

interface StatsCardProps {
  title: string;
  value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styles.stats_card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};

export default StatsCard;
