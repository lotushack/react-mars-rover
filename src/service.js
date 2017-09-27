import axios from 'axios';

export function fetchRoverImage() {
  return axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}')
}
