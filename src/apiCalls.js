const fetchCityData = () => {
    return fetch('https://mighty-taiga-50595.herokuapp.com/')
        .then(response => response.json())
}

const fetchAirQuality = (city, state) => {
    return fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=3617f6f0-f606-4129-baf0-af48064ad14a`).then(response=> response.json())
}

  export {fetchAirQuality, fetchCityData}
