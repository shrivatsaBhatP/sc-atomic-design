import React from 'react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import classes from './styles.module.scss';

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
    <div className={classes.pagination}>
      <Button
        type="submit"
        onClick={onNext}
        buttonTheme="primary"
        buttonSize="small">
        {label}
      </Button>
      {showCancel ? (
        <>
          <Text type="paragraph">or</Text>
          <Button
            type="button"
            buttonTheme="secondary"
            onClick={onCancel}
            buttonSize="small">
            Cancel
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
