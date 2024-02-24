import axios from 'axios'

//const apikey = '2fa42e06772ea227e373ea2f16a5e6b1'
const apikey = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getAll = (city) => {
    const url = `${baseUrl}q=${city}&units=metric&appid=${apikey}`
    const request = axios.get(`${url}`)
    return request.then( response => response.data)
}


export default {getAll}