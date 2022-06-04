const fetchCityData = () => {
    return fetch('http://localhost:3001/api/v1/city-data')
            .then(response => response.json())
}


const fetchAirQuality = (city, state) => {
    return fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=3617f6f0-f606-4129-baf0-af48064ad14a`).then(response=> response.json())
}

  export {fetchAirQuality, fetchCityData}
