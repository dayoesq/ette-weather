import { FC } from 'react';

import { getHourMinute } from '../utils/helpers';
import { ICON_URL } from '../utils/constants';

import styles from '../styles/SmallCard.module.scss';
import general from '../styles/General.module.scss';

const SmallCard: FC<IWeatherProps> = props => {
    return (
        <div
            className={`${styles['small-card']} ${general['border__radius--xs']} ${general['border']}`}
        >
            {/* Card's upper part */}
            <div className={styles['top']}>
                <p
                    className={`${general['text-sm']} ${general['text__color--tertiary']}`}
                >
                    {getHourMinute(props.hourTime)}
                </p>
                <div className={styles.image}>
                    <img
                        src={`${ICON_URL}/${props.icon}.png`}
                        alt='Weather icon'
                    />
                </div>
                <p
                    className={`${general['text-md']} ${general['text__color--tertiary']}`}
                >
                    {Math.floor(props.temp)}&deg;C
                </p>
            </div>
            {/* Card's lower part */}
            <div className={styles['down']}>
                <p
                    className={`${general['text-xs']} ${general['text__color--tertiary']}`}
                >
                    {props.speed ? `${props.speed} m/s` : null}
                </p>
                <p
                    className={`${general['text-xs']} ${general['text__color--tertiary']}`}
                >
                    {props.humidity ? `${props.humidity} %` : null}
                </p>
                <p
                    className={`${general['text-xs']} ${general['text__color--tertiary']}`}
                >
                    {props.precipitation ? `${props.precipitation} mm` : null}
                </p>
            </div>
        </div>
    );
};

export default SmallCard;
