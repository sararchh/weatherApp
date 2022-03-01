import axios from 'axios';

export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})