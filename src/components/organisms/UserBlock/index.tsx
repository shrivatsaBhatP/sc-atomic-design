import React, { useState } from 'react';
import Card from '../../atoms/Card';
import Pagination from '../../molecules/Pagination';
import StepBody from '../StepBody';
import StepHeader from '../StepHeader';
import classes from './styles.module.scss';
import { stepState, Steps } from './defaultValue';
import StepOne from '../StepOne';

const UserBlock = () => {
  const [step, setStep] = useState<number>(1);

  const handleOnNext = () => {
    let newStep = step + 1;
    if (newStep > 3) newStep = 1;
    setStep(newStep);
  };

  function Step(strings: Object, step: number): Steps {
    return step === 3 ? Steps.STEP3 : step === 2 ? Steps.STEP2 : Steps.STEP1;
  }

  const onChange = () => {};

  return (
    <Card borderRadius={'4px'} color={'#3d3d3d'}>
      <div className={classes.contaienr}>
        <StepHeader
          stepName={stepState[Step`${step}`]['stepName']}
          stepNumber={stepState[Step`${step}`]['stepNumber']}
          description={stepState[Step`${step}`].description('', {})}
        />
        {/* <StepBody
          onChange={onChange}
          inputOptions={stepState[Step`${step}`].body.option}
          inputType={stepState[Step`${step}`].body.inputType}
          selectedOption={stepState.shape}
          value={stepState.value}
        /> */}
        <StepOne
          onChange={onChange}
          inputOptions={stepState[Step`${step}`].body.option}
          selectedOption={stepState.shape}
        />

        <Pagination
          label={stepState[Step`${step}`]['submitLabel']}
          onNext={handleOnNext}
          showCancel={stepState[Step`${step}`]['cancelOption']}
        />
      </div>
    </Card>
  );
};

export default UserBlock;
