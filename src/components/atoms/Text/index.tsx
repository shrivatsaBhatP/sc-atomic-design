import React from 'react';
import classes from './styles.module.scss';

export type TextProps = {
  children: React.ReactNode;
  type: 'heading' | 'paragraph' | 'sub-heading' | 'label';
  color?: string;
  size?: string;
  htmlfor?: string;
  weight?: number;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

export type TextRefType = HTMLParagraphElement;

const Text = React.forwardRef<TextRefType, TextProps>((props, ref) => {
  const style: React.CSSProperties = {
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
  };

  return (
    <p
      {...props}
      className={[classes.text, classes[props.type]].join(' ')}
      style={style}
      ref={ref}>
      {props.children}
    </p>
  );
});

export default Text;
