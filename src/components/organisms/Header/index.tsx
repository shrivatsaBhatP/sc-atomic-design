import React from 'react';
import Text from '../../atoms/Text';
import styles from './Header.module.scss';
import Image from '../../atoms/Image';

import src from '../../../assets/headerImage.png';

const Header: React.FC = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Image src={src} alt="header image" />
      <Text type="heading">Shape Calculator</Text>
    </div>
  );
};

export default Header;
