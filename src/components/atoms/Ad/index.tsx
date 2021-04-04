import React from 'react';
import Text from '../Text';
import classes from './styles.module.scss';

const Ad: React.FC = ({ children }) => {
  return (
    <div className={classes.ad}>
      {children ?? <Text type="label">{`120 x 240 Ad(Vertical Banner)`}</Text>}
    </div>
  );
};

export default Ad;
