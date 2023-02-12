import React from 'react';
import styles from './styles.module.css';

interface CyclingImagesProps {
  srcs: string[];
  tick: number;
}

const CyclingImages = ({ srcs, tick }: CyclingImagesProps) => {
  const itemCountStyle = {
    '--item-count': srcs.length,
    '--rotate-apply-adjustment': srcs.length % 2 === 0 ? 0 : 1,
    '--rotate-adjustment-tick': tick,
  } as React.CSSProperties;
  return (
    <div className={styles.wrapper} style={itemCountStyle}>
      {srcs.map((src, i) => {
        const style = { '--i': i } as React.CSSProperties;
        return (
          <img
            alt={`img${i}`}
            src={src}
            className={styles.userImage}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default CyclingImages;
