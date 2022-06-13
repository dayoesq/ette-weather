import { FC } from 'react';

import styles from '../styles/BigCard.module.scss';
import general from '../styles/General.module.scss';
import { getDateTime, getHourMinute, toCelcius } from '../utils/helpers';

const BigCard: FC<IWeatherProps> = (props) => {
    return (
        <div
            className={`${styles['big-card']} ${general['border__radius--xs']} ${general['border']}`}
        >
            <div className={styles['wrapper__top']}>
                <div className={styles['wrapper__top--city']}>
                    <p
                        className={`${general['color-black']} ${general['text-lg']}`}
                    >
                        {props.name}
                    </p>
                    <span
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        {props.description}
                    </span>
                </div>
                <div className={styles['wrapper__top--temperature']}>
                    <div>{`${props.icon}.png`}</div>
                    <span
                        className={`${general['color-black']} ${general['text-vl']}`}
                    >
                        {toCelcius(props.temp)}&deg;C
                    </span>
                </div>
            </div>
            <div className={styles['wrapper__down']}>
                <div className={styles['wrapper__down--date']}>
                    <p
                        className={`${general['color-black']} ${general['text-md']}`}
                    >
                        {getDateTime(props.dateTime)}
                    </p>
                    <span
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        {getHourMinute(props.hourTime)}
                    </span>
                </div>
                <div className={styles['wrapper__down--details']}>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        {props.speed ? `Wind: ${props.speed}m/s` : null}
                    </p>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
                    >
                        {props.humidity ? `Humidity: ${props.humidity} %` : null}
                    </p>
                    <p
                        className={`${general['color-tertiary']} ${general['text-sm']}`}
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