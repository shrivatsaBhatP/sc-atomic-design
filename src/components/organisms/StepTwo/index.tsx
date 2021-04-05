import React from 'react';
import UserInput from '../../molecules/UserInput';

const StepTwo: React.FC<any> = ({ shape }) => {
  const InputBody =
    {
      circle: function () {
        return (
          <>
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
          </>
        );
      },
      rectangle: function () {
        return (
          <>
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
          </>
        );
      },
      square: function () {
        return (
          <>
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
          </>
        );
      },
      ellipse: function () {
        return (
          <>
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
            <UserInput
              type="input"
              label="Diameter :"
              name="diameter"
              placeholder="text"
              onChange={() => {}}
              value={''}
            />
          </>
        );
      },
    }[shape]() || null;

  return <>{InputBody}</>;
};

export default StepTwo;
