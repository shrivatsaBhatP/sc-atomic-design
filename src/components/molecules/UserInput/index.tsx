import React from 'react';
import Input from '../../atoms/Input';
import RadioButton from '../../atoms/RadioButton';
import Text from '../../atoms/Text';
import classes from './styles.module.scss';

export type UserInputProps = {
  id: string;
  type: 'radio' | 'input';
  label: string;
  isChecked: boolean;
  value?: string | number | readonly string[];
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  width?: string;
};

const UserInput: React.FC<UserInputProps> = ({
  id,
  type,
  label,
  isChecked,
  onChange,
  ...props
}) => {
  const element =
    type === 'radio' ? (
      <>
        <RadioButton id={id} onChange={onChange} checked={isChecked} />
        <Text type="label" htmlfor={id}>
          {label}
        </Text>
      </>
    ) : (
      <>
        <Input type="text" {...props} />
        <Text type="label" htmlfor={id}>
          {label}
        </Text>
      </>
    );

  return <div className={classes.userinput}>{element}</div>;
};

export default UserInput;
