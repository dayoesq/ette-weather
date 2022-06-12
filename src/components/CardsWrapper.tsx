import { FC } from 'react';

import BigCard from './BigCard';
import SmallCard from './SmallCard';

import styles from '../styles/CardsWrapper.module.scss';

const CardsWrapper: FC = () => {
    return (
        <div className={styles['cards-wrapper']}>
            <BigCard />
            <div className={styles['cards']}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    );
};

export default CardsWrapper;
