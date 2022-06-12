import { FC } from 'react';

import styles from '../styles/BigCard.module.scss';
import general from '../styles/General.module.scss';

const BigCard: FC = (props) => {
    return (
        <div
            className={`${styles['big-card']} ${general['border__radius--xs']} ${general['border']}`}
        >
            <div className={styles['wrapper__top']}>
                <div className={styles['wrapper__top--city']}>
                    <p
                        className={`${general['color-black']} ${general['text-lg']}`}
                    >
                        Helsinki
                    </p>
                    <span
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        Scattered clouds
                    </span>
                </div>
                <div className={styles['wrapper__top--temperature']}>
                    <div>Icon</div>
                    <span
                        className={`${general['color-black']} ${general['text-vl']}`}
                    >
                        50&deg;C
                    </span>
                </div>
            </div>
            <div className={styles['wrapper__down']}>
                <div className={styles['wrapper__down--date']}>
                    <p
                        className={`${general['color-black']} ${general['text-md']}`}
                    >
                        May 1st
                    </p>
                    <span
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        11:45
                    </span>
                </div>
                <div className={styles['wrapper__down--details']}>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        5.1m/s
                    </p>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        Humidity: 81%
                    </p>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        Precipitation: (3h) 5 mm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BigCard;