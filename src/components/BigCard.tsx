import { FC } from 'react';

import { ICON_URL } from '../utils/constants';
import {
    capitalizeFirstLetter,
    getDateTime,
    getHourMinute
} from '../utils/helpers';

import styles from '../styles/BigCard.module.scss';
import general from '../styles/General.module.scss';

const BigCard: FC<IWeatherProps> = props => {
    return (
        <div
            className={`${styles['big-card']} ${general['border__radius--xs']} ${general['border']}`}
        >
            {/* Card's top part */}
            <div className={styles['wrapper__top']}>
                <div className={styles['wrapper__top--city']}>
                    <p
                        className={`${general['text__color--black']} ${general['text-lg']}`}
                    >
                        {props.name}
                    </p>
                    <span
                        className={`${general['text__color--tertiary']} ${general['text-sm']}`}
                    >
                        {capitalizeFirstLetter(props.description)}
                    </span>
                </div>
                <div className={styles['wrapper__top--temperature']}>
                    <div>
                        <img
                            src={`${ICON_URL}/${props.icon}.png`}
                            alt='Weather icon'
                        />
                    </div>
                    <span
                        className={`${general['text__color--black']} ${general['text-vl']}`}
                    >
                        {Math.floor(props.temp)}&deg;C
                    </span>
                </div>
            </div>
            {/* Card's lower part */}
            <div className={styles['wrapper__down']}>
                <div className={styles['wrapper__down--date']}>
                    <p
                        className={`${general['text__color--black']} ${general['text-md']}`}
                    >
                        {getDateTime(props.dateTime)}
                    </p>
                    <span
                        className={`${general['text__color--tertiary']} ${general['text-sm']}`}
                    >
                        {getHourMinute(props.hourTime)}
                    </span>
                </div>
                <div className={styles['wrapper__down--details']}>
                    <p
                        className={`${general['text__color--tertiary']} ${general['text-sm']}`}
                    >
                        {props.speed ? `Wind: ${props.speed}m/s` : null}
                    </p>
                    <p
                        className={`${general['text__color--tertiary']} ${general['text-sm']}`}
                    >
                        {props.humidity
                            ? `Humidity: ${props.humidity} %`
                            : null}
                    </p>
                    <p
                        className={`${general['text__color--tertiary']} ${general['text-sm']}`}
                    >
                        {props.precipitation
                            ? `Precipitation (3h): ${props.precipitation} mm`
                            : null}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BigCard;
