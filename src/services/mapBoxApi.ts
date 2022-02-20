import axios from 'axios';

export const mapBoxApi = axios.create({
  baseURL: 'https://api.mapbox.com',
})