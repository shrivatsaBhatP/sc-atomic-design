import React from 'react';
import Card from '../../atoms/Card';
import Text from '../../atoms/Text';

export type StepHeaderProps = {
  stepNumber: string | number;
  stepName: string;
  description: string;
};

const StepHeader: React.FC<StepHeaderProps> = ({
  stepNumber,
  stepName,
  description,
}) => {
  function createMarkup() {
    const string = description ? description : '';
    return { __html: string };
  }

  return (
    <Card isBorder={false}>
      <Text type="paragraph">
        Step {stepNumber} : {stepName}
      </Text>
      <Text type="paragraph" dangerouslySetInnerHTML={createMarkup()}>
        {null}
      </Text>
    </Card>
  );
};

export default StepHeader;
