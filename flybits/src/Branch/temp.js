import React, { useState } from 'react';

  const App = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        let location = {lat: position.coords.latitude, lng: position.coords.longitude} 
        localStorage.setItem('geolocations', JSON.stringify(location))
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  const setData = () => {
    let location = {lat, lng} 
    localStorage.setItem('geolocations', JSON.stringify(location))
  }

  const getData = () => {
    console.log("Hello")
    let location = localStorage.getItem('geolocations')
    location = JSON.parse(location)
    console.log("From storage", location)
  }

  return (
    <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
      <button onClick={getData}>Get Location from storage</button>
    </div>
  );
}

// export default App;