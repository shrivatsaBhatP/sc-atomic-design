import React from 'react';
import { optionsBody, optionElement } from '../../../common/interface';
import UserInput from '../../molecules/UserInput';
import classes from './styles.module.scss';

export type StepBodyProps = {
  onChange: any;
  inputOptions: optionsBody;
  selectedOption: any;
  inputType: string;
};

const StepBody: React.FC<StepBodyProps> = (props) => {
  console.log(props.inputOptions);

  const element = {
    radio: () => (
      <>
        {props.inputOptions.map((option: optionElement) => {
          return (
            <UserInput
              type="radio"
              id={option.label}
              label={option.label}
              isChecked={false}
              onChange={() => {}}
            />
          );
        })}
      </>
    ),
    input: () => <div>input</div>,
    result: () => <div></div>,
  }[props.inputType];

  return <div>{element}</div>;
};

export default StepBody;
