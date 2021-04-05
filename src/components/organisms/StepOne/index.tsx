import React from 'react';
import UserInput from '../../molecules/UserInput';

const StepOne: React.FC<any> = ({ onChange, inputOptions, selectedOption }) => {
  return (
    <>
      {inputOptions.map((option: any) => {
        return (
          <>
            <UserInput
              key={option.id}
              type="radio"
              label={option.label}
              id={option.value}
              value={option.value}
              isChecked={selectedOption === option.value}
              onChange={onChange}
            />
          </>
        );
      })}
    </>
  );
};

export default StepOne;
