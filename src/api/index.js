import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw?.lat,
          tr_latitude: ne?.lat,
          bl_longitude: sw?.lng,
          tr_longitude: ne?.lng,
        },
        // headers: {
        //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        //   'X-RapidAPI-Key': 'f3a2af2c88mshc307d7e81f65842p155ecdjsn2ebd592f4d7f',
        // },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/find',
        {
          params: { lat, lon: lng },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
