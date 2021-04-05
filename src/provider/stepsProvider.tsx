import { useState, createContext } from 'react';
import { initialValue } from '../common/defaultValue';
import { Status } from '../common/enums';
import { ChildrenProps, StepProviderProps } from '../common/interface';
import { ValueType } from '../common/type';

export const StepProvider = createContext<StepProviderProps>({
  step: 0,
  setStep: () => {},
  value: initialValue,
  setValue: () => {},
  status: Status.IDLE,
  setStatus: () => {},
});

export const Provider = ({ children }: ChildrenProps) => {
  const [step, setStep] = useState<number>(1);
  const [value, setValue] = useState<ValueType>(initialValue);
  const [status, setStatus] = useState<Status>(Status.IDLE);

  const providerProps: StepProviderProps = {
    step,
    setStep,
    value,
    setValue,
    status,
    setStatus,
  };
  return (
    <StepProvider.Provider value={providerProps}>
      {children}
    </StepProvider.Provider>
  );
};
