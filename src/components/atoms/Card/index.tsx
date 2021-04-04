import React from 'react';
import classes from './styles.module.scss';

export type CardProps = {
  isBorder?: boolean;
  borderRadius?: string;
  color?: string;
};

const Card: React.FC<CardProps> = ({
  isBorder = true,
  color,
  borderRadius,
  children,
}) => {
  const style: React.CSSProperties = {
    borderStyle: `${isBorder ? 'solid' : 'none'}`,
    borderRadius,
    borderColor: color,
  };
  return (
    <div className={classes.card} style={style}>
      {children}
    </div>
  );
};

export default Card;
