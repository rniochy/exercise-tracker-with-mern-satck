import axios from 'axios'

const baseURL = process.env.BaseURL;
const fetchData = axios.create({baseURL: 'http://localhost:5000/',});

export default fetchData;