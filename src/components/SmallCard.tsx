import { FC } from 'react';

import { getHourMinute } from '../utils/helpers';

import styles from '../styles/SmallCard.module.scss';
import general from '../styles/General.module.scss';
import { ICON_URL } from '../utils/constants';

const SmallCard: FC<IWeatherProps> = props => {
    return (
        <div
            className={`${styles['small-card']} ${general['border__radius--xs']} ${general['border']}`}
        >
            <div className={styles['wrapper']}>
                <div className={styles['wrapper__top']}>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        {getHourMinute(props.hourTime)}
                    </p>
                    <div>
                        <img
                            src={`${ICON_URL}/${props.icon}.png`}
                            alt='Weather icon'
                        />
                    </div>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        {Math.floor(props.temp)}&deg;C
                    </p>
                </div>
                <div className={styles['wrapper__down']}>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        {props.speed ? `${props.speed}m/s` : null}
                    </p>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        {props.humidity ? `${props.humidity} %` : null}
                    </p>
                    <p
                        className={`${general['text-xs']} ${general['color-tertiary']}`}
                    >
                        {props.precipitation
                            ? `${props.precipitation} mm`
                            : null}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SmallCard;
