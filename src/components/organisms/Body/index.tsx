import React from 'react';
import Ad from '../../atoms/Ad';
import InstructionBlock from '../InstructionBlock';
import UserBlock from '../UserBlock';
import classes from './Body.module.scss';

const Body = () => {
  return (
    <div className={classes.body}>
      <InstructionBlock />
      <UserBlock />
      <Ad />
    </div>
  );
};

export default Body;
