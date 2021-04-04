import React from 'react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

export type PaginationProps = {
  label: string;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  showCancel: boolean;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
};

const Pagination: React.FC<PaginationProps> = ({
  label,
  onNext,
  showCancel,
  onCancel,
}) => {
  return (
    <div>
      <Button type="submit" onClick={onNext}>
        {label}
      </Button>
      {showCancel ? (
        <>
          <Text type="paragraph">or</Text>
          <Button type="button" buttonTheme="danger" onClick={onCancel}>
            Cancel
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
