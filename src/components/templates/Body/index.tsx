import React from 'react';
import classes from './styles.module.scss';

const template: React.FC = ({ children }) => {
  return <div className={classes['template-body']}>{children}</div>;
};

export default template;
