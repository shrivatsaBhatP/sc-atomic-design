import React from 'react';
import styles from './UserInput.module.scss';
import { UserInputProps } from '../../../common/interface';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const UserInput: React.FC<UserInputProps> = ({ label, ...props }) => {
  return (
    <div className={styles.Container}>
      <span>
        <Text type="default" weight={600}>
          {label}
        </Text>
      </span>
      <Input {...props} />
    </div>
  );
};

export default UserInput;
