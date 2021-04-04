import React from 'react';
import Card from '../../atoms/Card';
import Pagination from '../../molecules/Pagination';
import StepHeader from '../../molecules/StepHeader';

const UserBlock = () => {
  return (
    <Card borderRadius={'4px'} color={'#3d3d3d'}>
      <StepHeader stepName="name" stepNumber={1} description={' '} />
      <Pagination label={'Next'} onNext={() => {}} showCancel={true} />
    </Card>
  );
};

export default UserBlock;
