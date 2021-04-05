import styles from './StepDetail.module.scss';
import { StepDetailInterface } from '../../../common/interface';
import Text from '../../atoms/Text';

const StepDetail = ({
  stepNumber,
  stepName,
  description,
}: StepDetailInterface) => {
  function createMarkup() {
    const string = description ? description : '';
    return { __html: string };
  }

  return (
    <div className={styles.StepDetailContiner}>
      <Text type="paragraph">
        Step {stepNumber} : {stepName}
      </Text>
      <Text type="paragraph" dangerouslySetInnerHTML={createMarkup()}>
        {null}
      </Text>
    </div>
  );
};

export default StepDetail;
