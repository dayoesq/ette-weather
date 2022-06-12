import { FC } from 'react';
// import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';

import styles from './styles/App.module.scss';

const App: FC = () => {
    return <main className={styles.app}><SmallCard /></main>;
    // return <main className={styles.app}><BigCard /></main>;
};

export default App;
