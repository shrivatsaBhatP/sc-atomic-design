import React from 'react';
import classes from './styles.module.scss';

export type RadioButtonProps = {
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type RadioButtonRefType = HTMLInputElement;

const RadioButton = React.forwardRef<RadioButtonRefType, RadioButtonProps>(
  (props, ref) => {
    return <input type="radio" {...props} ref={ref} />;
  }
);

export default RadioButton;
