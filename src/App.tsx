import React, { FC, useEffect, useState } from 'react';

import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';

import { CITY_DETAILS, WEATHER_URL } from './utils/constants';
import { normaliseJyvaskyla } from './utils/helpers';

import styles from './styles/App.module.scss';
import general from './styles/General.module.scss';

const App: FC = () => {
    const [city, setCity] = useState<string | number | undefined>('0');
    const [cities, setCities] = useState<IWeather[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            (async () => {
                if (
                    cities.length < 1 ||
                    (cities.length <= 1 && (city === '0' || city === undefined))
                ) {
                    try {
                        const allWeather: IWeather[] = [];
                        CITY_DETAILS.forEach(async city => {
                            // Skip this iteration.
                            if (city.id === 0) return;
                            const response: any = await fetch(
                                `${WEATHER_URL}/forecast?id=${+city.id}&units=metric&appid=${
                                    process.env.REACT_APP_API_KEY
                                }`
                            );
                            const data = await response.json();
                            allWeather.push(data);
                            setCities([...allWeather]);
                            if (!response.ok) {
                                throw new Error(response.message);
                            }
                        });
                    } catch (err: any) {
                        console.error(err.message);
                    }
                } else if (city && city !== '0') {
                    try {
                        const weather: IWeather[] = [];
                        const response: any = await fetch(
                            `${WEATHER_URL}/forecast?id=${+city}&units=metric&appid=${
                                process.env.REACT_APP_API_KEY
                            }`
                        );
                        const resData = await response.json();
                        weather.push(resData);
                        setCities([resData]);
                        if (!response.ok) {
                            throw new Error(response.message);
                        }
                    } catch (err: any) {
                        console.error(err.message);
                    }
                }
            })();
        }
        // Clean effect.
        return () => {
            isMounted = false;
        };
    }, [cities.length, city]);

    return (
        <main className={styles.app}>
            {/* Header */}
            <div className={`${styles['header__main']}`}>
                <div className={`${styles['header__main--top']}`}>&nbsp;</div>
                <div className={`${styles['header__main--center']}`}>
                    <p
                        className={`${general['text__color--black']} ${general['text-lg']}`}
                    >
                        Säätutka
                    </p>
                </div>
            </div>
            {/* Main container */}
            <div className={styles.container}>
                <div className={styles['main-wrapper']}>
                    <div
                        className={`${styles.dropdown} ${general['border__radius--xs']} ${general['border']}`}
                    >
                        <label htmlFor='city'>&nbsp;</label>
                        <select
                            name='city'
                            id='city'
                            value={city}
                            onChange={onChange}
                            className={`${general['text__color--black']} ${general['text-sm']} ${general['border__radius--xs']} ${general['border']}`}
                        >
                            {CITY_DETAILS.map(city => (
                                <option
                                    value={city.id}
                                    key={city.id.toString()}
                                >
                                    {city.name}
                                </option>
                            ))}
                        </select>
                        <span className={styles.degree}>&#9660;</span>
                    </div>
                    {cities &&
                        cities.map(city => (
                            <div
                                className={styles['cards-wrapper']}
                                key={city.city.id}
                            >
                                <BigCard
                                    key={city.city.id}
                                    dateTime={city.list[0].dt_txt}
                                    name={normaliseJyvaskyla(city.city.name)}
                                    description={
                                        city.list[0].weather[0].description
                                    }
                                    icon={city.list[0].weather[0].icon}
                                    temp={city.list[0].main.temp}
                                    hourTime={city.list[0].dt_txt}
                                    speed={city.list[0].wind.speed}
                                    humidity={city.list[0].main.humidity}
                                    precipitation={city.list[0].rain?.['3h']}
                                />
                                <div className={styles.cards}>
                                    {city.list.slice(1, 6).map((el, i) => (
                                        <SmallCard
                                            key={i}
                                            dateTime={el.dt}
                                            icon={el.weather[0].icon}
                                            temp={el.main.temp}
                                            hourTime={el.dt_txt}
                                            speed={el.wind.speed}
                                            humidity={el.main.humidity}
                                            precipitation={el.rain?.['3h']}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </main>
    );
};

export default App;
