import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
  

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Hyderabad",
        feelsLike: 32.29,
        humidity: 60,
        temp: 29.23,
        tempMax: 29.73,
        tempMin: 29.23,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather app </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>

    )
}