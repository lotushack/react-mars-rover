import axios from 'axios'

export default function getImages(newUrl){
  return axios.get(newUrl)
}
