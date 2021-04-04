import React from 'react';
import classes from './styles.module.scss';

export type TextProps = {
  children: React.ReactNode;
  type: 'heading' | 'paragraph' | 'default' | 'sub-heading';
  color?: string;
  size?: string;
  weight?: number;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

export type TextRefType = HTMLParagraphElement;

const Text = React.forwardRef<TextRefType, TextProps>((props, ref) => {
  return (
    <p {...props} className={[classes.paragraph].join(' ')} ref={ref}>
      {props.children}
    </p>
  );
});

export default Text;
