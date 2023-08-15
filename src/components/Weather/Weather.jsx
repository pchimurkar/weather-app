import { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { getTem, getTem1 } from "../../service/weather";
import Button from "react-bootstrap/Button";


const Weather = () => {
  const [city, setCity] = useState("");
  const [curDate, setCurDate] = useState("");
  const [cityTemp, setCityTemp] = useState({});
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [wind, setWind] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const defaultCity = "New Delhi";
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getTem1(lat, lon).then((result) => {
          if (result.cod === 200) {
            console.log(result.name);
            setCityName(result.name);
            setCityTemp(result.main);
            setCurDate(result);
            setWeather(result.weather[0]);
            setWind(result.wind);
            setIsLoading(false);
          } else {
            setIsError(true);
            setIsLoading(false);
          }
        });
      },
      function (error) {
        setSearch(defaultCity);
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    if (search) {
      setIsError(false);
      getTem(search).then((result) => {
        if (result.cod === 200) {
          setCityName(result.name);
          setCityTemp(result.main);
          setCurDate(result);
          setWeather(result.weather[0]);
          setWind(result.wind);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      });
    }
  }, [search]);

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      setSearch(city);
      setCity("");
    }
  };

  const onClickHandler = () => {
    setSearch(city);
    setCity("");
  };

  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };
  

  return (
    <div className={styles.card}>
    <div className={styles.card}>    
      <h3 className={styles.date}>{new Date().toDateString(curDate.dt)}</h3>
      <div className={styles.search}>
        <input
          className={styles.searchBar}
          type="search"
          value={city}
          onChange={onChangeHandler}
          onKeyUp={onKeyUpHandler}
        />

        <Button variant="outline-primary" onClick={onClickHandler}>
          Search
        </Button>
      </div>
      {!isLoading && (
        <>
          {isError && <h2 className={styles.city}>
          City Not Found !!!<br/>
          <img src="https://i.pinimg.com/originals/6f/44/b9/6f44b91273982d3ebb7d1533479bd649.png" 
           height='67px' width='60px'/>
          
        
          </h2>}
          {!isError && (
            <>
              <div className={styles.city}>
                <h2>{cityName}</h2>
              </div>
              <div className={styles.iconDesTemp}>
                <div className={styles.iconDes}>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt="img"
                    className={styles.icon}
                  />
                  <div>{weather.description}</div>
                </div>
                <h1 className={styles.tem}>{cityTemp.temp}°C</h1>
              </div>
              <div className={styles.flex}>
                <p className={styles.temp}>Temp : {cityTemp.temp} °C </p>
              </div>

              <div>
                <p className={styles.p}>Humidity : {cityTemp.humidity} %</p>
                <p className={styles.p}>Wind-Speed : {wind.speed} Km/h</p>
              </div>
            </>
          )}
          {isLoading && (
            <>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </>
          )}
        </>
      )}
      <div></div>
    </div>
    </div>
  );
};
export default Weather;
