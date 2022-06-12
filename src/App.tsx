import { FC } from 'react';
// import CardsWrapper from './components/CardsWrapper';
import Dropdown from './components/Dropdown';
// import BigCard from './components/BigCard';
// import SmallCard from './components/SmallCard';

import styles from './styles/App.module.scss';

const App: FC = () => {
    return <main className={styles.app}><Dropdown /></main>;
    // return <main className={styles.app}><CardsWrapper /></main>;
    // return <main className={styles.app}><BigCard /></main>;
};

export default App;
