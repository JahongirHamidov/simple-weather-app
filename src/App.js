import React,{useState,useContext} from 'react'
import './App.css'
import {Weather} from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import {Form} from './components/Form'
import {Provider} from './globalState'
import {GlobalState} from './globalState'

const api = {
  key: '9d338d844a7bffd71902ffe0d3b6a201',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export default function App() {

  const [state,setState] = useState(null)
  const [weatherIcon, setWeatherIcon] = React.useState(null)
  //const {city, country} = useContext(GlobalState)

  
    
    function getWeatherIcon(icons,rangeId){
        switch(true){
            case rangeId>=200 && rangeId<=232:
                setWeatherIcon(icons.Thunderstorm)
            break
            case rangeId>=300 && rangeId<=321:
                setWeatherIcon(icons.Drizzle)
            break
            case rangeId>=500 && rangeId<=531:
                setWeatherIcon(icons.Rain)
            break
            case rangeId>=600 && rangeId<=622:
                setWeatherIcon(icons.Snow)
            break
            case rangeId>=700 && rangeId<=781:
                setWeatherIcon(icons.Atmosphere)
            break
            case rangeId==800:
                setWeatherIcon(icons.Clear)
            break
            case rangeId>=801 && rangeId<=804:
                setWeatherIcon(icons.Cloud)
            break
            default: 
              setWeatherIcon(icons.Cloud)
        }
    }
    
    const icons = {
        Thunderstorm: 'wi-thunderstorm',
        Drizzle: 'wi-sleet',
        Rain: 'wi-storm-showers',
        Snow: 'wi-snow',
        Atmosphere: 'wi-fog',
        Clear: 'wi-day-sunny',
        Cloud: 'wi-day-fog'
    }
    //getWeatherIcon(icons, data.weather[0].id )

  const getWeather = async () =>{
      await fetch(`${api.base}weather?q=berlin,germany&appid=${api.key}`)
        .then(data=> data.json() )
        .then(json=>{ setState(json) })
        .catch(err=> console.log(err) )
  }

console.log(state)
  return (
    <Provider>
      <Form loadWeather={getWeather} />
      { state ? <Weather data={state} icon={icons} /> : <p>wait</p>}

    </Provider>
  )
  }

