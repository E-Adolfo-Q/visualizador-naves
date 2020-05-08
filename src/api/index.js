import axios from 'axios';

export default axios.create({
  baseURL:'http://aurium.cl/swapi/starships.json'
});

