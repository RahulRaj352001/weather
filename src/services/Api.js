
import axios from 'axios'
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='7095615b259a7d7a1454b15cc38fe185';

export const Getdata = async(city,country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
       
    
}
