import { FC } from 'react';
// import CardsWrapper from './components/CardsWrapper';
// import Dropdown from './components/Dropdown';
// import BigCard from './components/BigCard';
// import SmallCard from './components/SmallCard';

import { weather } from './assets/data/weather';

import styles from './styles/App.module.scss';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';
// import { cityDetails, WEATHER_URL } from './utils/constants';

const App: FC = () => {
    // const [city, setCity] = useState<string | undefined>('');
    // const [cities, setCities] = useState<any>([]);

    // useEffect(() => {
    //     const getWeatherHandler = async () => {
    //         try {
    //             const allWeather: any = [];
    //             if (city === '' || city === undefined) {
    //                 cityDetails.forEach(async (coord) => {
    //                     // Skip this iteration.
    //                     if (coord.lat === 0 || coord.lon === 0) return;
    //                     const response = await fetch(
    //                         `${WEATHER_URL}/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_API_KEY}`
    //                     );
    //                     allWeather.push(response);
    //                 });
    //                 setCities(allWeather);
    //             }
    //         } catch (err: any) {
    //             console.error(err.message);
    //         }
    //     };
    //     getWeatherHandler();
    // }, [city]);

    return (
        <main>
            {weather &&
                weather.map(city => (
                    <div className={styles['cards-wrapper']} key={city.city.id}>
                        <BigCard
                            key={city.city.id}
                            dateTime={city.list[0].dt}
                            name={city.city.name}
                            description={city.list[0].weather[0].description}
                            icon={city.list[0].weather[0].icon}
                            temp={city.list[0].main.temp}
                            hourTime={city.list[0].dt}
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
                                    hourTime={el.dt}
                                    speed={el.wind.speed}
                                    humidity={el.main.humidity}
                                    precipitation={el.rain?.['3h']}
                                />
                            ))}
                        </div>
                    </div>
                ))}
        </main>
    );
};

export default App;
