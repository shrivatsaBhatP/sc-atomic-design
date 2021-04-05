import React from 'react';
import classes from './styles.module.scss';

export type StepBodyProps = {
  onChange: any;
  inputOptions: any;
  selectedOption: any;
};

const StepBody: React.FC<StepBodyProps> = (props) => {
  console.log(props.inputOptions);

  const element = {
    radio: (props: any) => <div></div>,
    input: (props: any) => <div></div>,
    result: (props: any) => <div></div>,
  };

  return <div></div>;
};

export default StepBody;
