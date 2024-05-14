
import React, { useEffect, useState } from 'react'
import Map from '../components/Map';

function Continents() {
    const [country, setCountry] = useState([]);

    useEffect(()=> {
        fetch("https://thronesapi.com/api/v2/Continents")
      .then((response) => response.json())
      .then((data) => {setCountry(data)})
      .catch((err) => console.error(err));
    }, []);

  return <Map country={country}/>
}

export default Continents