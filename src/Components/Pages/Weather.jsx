import axios from "axios";
import React from "react";
import { useState } from "react";
import { Grid } from "semantic-ui-react";
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

  const searchWeather = async () => {
    if ((lat && lon) || city) {
      setLoading(true)
      if (city) {
        const wdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${value.city}&appid=${apikey}`
        );
      
        if (wdata.status == 200) {
          setLat(wdata.data.coord.lat);
          setLon(wdata.data.coord.lon);
          setWeatherData(wdata.data);
          setMessage("your today weather");
          setColor("green");
        } else if (wdata.response.status == 404) {
          setMessage("city not found please try again");
          setColor("orange");
        }
      } else {
        const wdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
        );
        if (wdata.status == 200) {
          setCity(wdata.data.name);
          setWeatherData(wdata.data);
          setMessage("your today weather");
          setColor("green");
        } else {
          setMessage("data is not matching please try again");
          setColor("orange");
        }
      }
    } else {
      setMessage("please tell me your city or cordinates");
      setColor("red");
    }
  };
  return (
    <>
      <Grid padded>
        <Grid.Column>
          <Search
            change={change}
            value={value}
            location={locationHandel}
            weather={searchWeather}
          />
        </Grid.Column>
      </Grid>
      <Result loading={loading} message={message} color={color} data={weatherData} />
    </>
  );
};

export default Weather;
