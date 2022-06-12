import { FC } from 'react';

import styles from '../styles/SmallCard.module.scss';
import general from '../styles/General.module.scss';

const SmallCard: FC = () => {
    return (
        <div className={`${styles['small-card']} ${general['border']}`}>
            <div className={styles['wrapper']}>
                <div className={styles['wrapper__top']}>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        13:00
                    </p>
                    <div>Icon</div>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        12&deg;C
                    </p>
                </div>
                <div className={styles['wrapper__down']}>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        1.3m/s
                    </p>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        4%
                    </p>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        12mm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
