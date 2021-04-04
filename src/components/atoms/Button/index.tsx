import React from 'react';
import classes from './styles.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonSize?: 'small' | 'medium' | 'large';
  buttonTheme?: 'default' | 'positive' | 'danger';
  buttonStyle?: string;
  backgroundColor?: string;
};

export type ButtonRefType = HTMLButtonElement | null;

const Button = React.forwardRef<ButtonRefType, ButtonProps>(
  ({ buttonTheme = 'default', buttonSize = 'medium', ...props }, ref) => {
    const style: React.CSSProperties = {
      backgroundColor: props.backgroundColor,
    };

    return (
      <button
        {...props}
        className={[
          classes.button,
          classes[buttonTheme],
          classes[buttonSize],
        ].join(' ')}
        style={style}
        ref={ref}>
        {props.children}
      </button>
    );
  }
);

export default Button;
