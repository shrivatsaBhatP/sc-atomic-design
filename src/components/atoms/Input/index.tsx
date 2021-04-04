import React from 'react';
import classes from 'styles.module.scss';

export type InputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string | number | readonly string[];
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  width?: string;
  fontSize?: string;
  color?: string;
};

export type InputRefType = HTMLInputElement | null;

const Input = React.forwardRef<InputRefType, InputProps>((props, ref) => {
  const style: React.CSSProperties = {
    width: props.width,
    fontSize: props.fontSize,
    color: props.color,
  };

  return (
    <input
      {...props}
      className={[classes.input].join(' ')}
      style={style}
      ref={ref}
    />
  );
});

export default Input;
