import AdVerticalBanner from '../organisms/AdVerticalBanner/AdVerticalBanner';
import Header from '../organisms/Header';
import HomeDescriptionBlock from '../organisms/HomeDescriptionBlock';
import UserInteractionCard from '../organisms/UserInteractionCard';
import { Provider } from '../../provider/stepsProvider';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <section>
        <HomeDescriptionBlock />
        <Provider>
          <UserInteractionCard />
        </Provider>
        <AdVerticalBanner>{null}</AdVerticalBanner>
      </section>
    </div>
  );
};

export default App;
