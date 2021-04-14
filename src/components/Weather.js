import React from 'react'
import '../styles.css';
import { Button } from 'semantic-ui-react';
import moment from 'moment';


const refresh = () => {
    window.location.reload();
}


const weather = ({weatherData}) => {

    
    return (
        <div className="container">
            <div className="main">
                <div className="top flex">
                    <p className="header">{weatherData.name}</p>
                    <Button className="button" inverted color="blue" circular icon="refresh" onClick={refresh}></Button>
                </div>
                <div className="flex day">
                    <p>{moment().format('dddd')} {moment().format('LL')}</p>
                    <p>{weatherData.weather[0].main}</p>
                </div>
                <div className="flex temp">
                    <p>Temperature: {weatherData.main.temp} &deg;C</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                </div>
                <div className="flex sunrise-sunset">
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default weather
