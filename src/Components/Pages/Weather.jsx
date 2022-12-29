import axios from "axios";
import React from "react";
import { useState } from "react";
import { Grid, } from "semantic-ui-react";
import Recent from "./Recent";
import Result from "./Result";
import Search from "./Search";

const Weather = () => {
  const [city, setCity] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [recent, setRecent] = useState([]);
  // const recentdata=[]

  const apikey = "1cad30e3e974f797a047ea62fd1c8970";

  setTimeout(() => {
    setMessage("");
  }, 5000);

  const value = {
    city: city,
    lat: lat,
    lon: lon,
  };

  const change = (event) => {
    const name = event.target.name;
    if (name === "city") {
      setCity(event.target.value);
    } else if (name === "lon") {
      setLon(event.target.value);
    } else if (name === "lat") {
      setLat(event.target.value);
    }
  };

  const locationHandel = (e) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setCity("");
          setLat("");
          setLon("");
          setTimeout(() => {
            setLat(res.coords.latitude);
            setLon(res.coords.longitude);
          }, 500);
        },
        (error) => {}
      );
    } else {
      console.log("Location not supported");
    }
  };

  const getToDate=()=>{
    var today = new Date(),
    date =  today.getDate()+ '-' + (today.getMonth() + 1) + '/' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
return date;
}
 
  const ourData=(item)=>{
    const toDate=getToDate();
    item.date=toDate;
  const data=[...recent,item]
  setRecent(data)
  }

  const searchWeather = async (city) => {
   try{  
    console.log("wdtadaa")
   if (lat && lon || city) {
      setLoading(true)
      if (city) {
    console.log(city,"wdtadaa")

        const wdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );
        if (wdata.status == 200) {
          setLoading(false)
          setLat(wdata.data.coord.lat);
          setLon(wdata.data.coord.lon);
          setWeatherData(wdata.data);
           ourData(wdata.data)
          // setRecent(...recent.push(wdata.data))
          setMessage("your today weather");
          setColor("green");
        } 
      } else {
        const wdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
        );
        if (wdata.status == 200) {
          setLoading(false)
          setCity(wdata.data.name);
          setWeatherData(wdata.data);
          ourData(wdata.data)
          setMessage("your today weather");
          setColor("green");
        }
      }
    } else {
      setLoading(false)
      setMessage("please tell me your city or cordinates");
      setColor("red");
    }
  }catch(error){
   setWeatherData('')
    setLat('');
    setLon('');
    setLoading(false)
    setMessage("city not found please try again");
    setColor("orange");
  }
  };

  const recentWeather=async(event,what)=>{
     if(what=="pre"){
      setCity(event.name)
      setLat(event.coord.lat)
      setLon(event.coord.lon)
      setWeatherData(event)
     }else{
       setCity(event)
       await searchWeather(event)
     }
  }
  

  return (
    <>
      <Grid padded columns={2}>
        <Grid.Column style={{marginTop:78}} width={4}>
         <Recent recent={recent} dataForResult={recentWeather}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <Search
            change={change}
            value={value}
            location={locationHandel}
            weather={searchWeather}
          />
           <Result loading={loading} message={message} color={color} data={weatherData} />
        </Grid.Column>
      </Grid>
     
    </>
  );
};

export default Weather;
