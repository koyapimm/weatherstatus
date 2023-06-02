import axios from "axios"
import React, { useState } from "react"
import autoAnimate from '@formkit/auto-animate'

function App() {

  
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("")



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=94fa3ce960ed2b70d7704eb02253b011`
  
  
  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url)
      .then((response) => {
        setData(response.data)
      })
      setLocation("")
    }
  }

  return (
    <div className=" max-w-[1280px] mx-auto" >
      
      <div className="grid grid-rows-3 px-10 ">
        <div className=" w-full h-10" >
          <input 
          type="text" 
          placeholder="Enter Location"
          value={location}
          onKeyPress={searchLocation}
          onChange={event => setLocation(event.target.value)}  
          className=" block text-center bg-transparent rounded-full border-opacity-30 border-white/40 border-2 mx-auto mt-10 h-10 sm:w-96 w-60 placeholder:text-white"/>
        </div>
          <div className="flex flex-row justify-between" >
            <div>
              <div className=" text-3xl sm:text-4xl lg:mt-5 mt-10">
                <p>{data && data.name}</p>
              </div>
              <div className=" flex flex-row gap-2">
                <div className=" font-bold sm:text-8xl text-6xl lg:mt-4 mt-10">
                  <h1 className="">{Math.round(data && data.main.temp)}℃</h1>
                </div>
                <div className="my-auto">
                  <p>{Math.round(data && data.main.temp_max)} ℃ ↑</p>
                </div>
                <div className="my-auto">
                  <p>{Math.round(data && data.main.temp_min)} ℃ ↓</p>
                </div>
              </div>
            </div>
            <div className="rotate-180 font-bold sm:text-4xl text-2xl my-auto">
              <div className="rotate-90">
                {data && data.weather[0].main}
              </div>
            </div>
          </div>
        </div>
      <div>
        <div className=" flex flex-row justify-center gap-3 sm:gap-10 sm:py-10 py-5 text-center sm:text-3xl text-xl bg-white/5 rounded-3xl mt-0 mb-14">
          <div className="">
            <p>{data && Math.round(data.main.feels_like)} ℃</p>
            <p>Feels Like</p>
          </div>
          <div >
            <p>{data && data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div >
            <p>{data && data.wind.speed} KMH</p>
            <p>Wind Speed </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
