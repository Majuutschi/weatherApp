import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      // Get your position
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // Get API
      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });

      // console.log("Latitude is: ", lat);
      // console.log("Longitude is: ", long);
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ) : (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      )}
      
    </div>
  );
}

export default App;
