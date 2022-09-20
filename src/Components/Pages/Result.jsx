import React from "react";
import { Image, Segment } from "semantic-ui-react";
import LoaderComponent from "../common/loader";
import MessageBlock from "../common/message";

const Result = ({ message, color, data,loading }) => {
  const KtoC = (k) => {
    return (k - 273.15).toFixed(2) + "^ C";
  };
  const currentDateTime = Date().toLocaleString();
  return (
    <>
      <Segment>
        {message ? <MessageBlock message={message} color={color} /> : ""}  
        {data ? (
          <>
            <Segment color="orange">
              {currentDateTime}
              <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather Icon"
              ></Image>
              {data.name} ( {data.sys.country} ) ({KtoC(data.main.temp)}){" "}
              {data.weather[0].description}
            </Segment>
            <Segment.Group stacked>
              <Segment.Group horizontal>
                <Segment>Feels Like</Segment>
                <Segment>{data.main.feels_like} </Segment>
              </Segment.Group>
              <Segment.Group horizontal>
                <Segment>Humidity</Segment>
                <Segment>{data.main.humidity}</Segment>
              </Segment.Group>
              <Segment.Group horizontal children>
                <Segment>Pressure</Segment>
                <Segment>{data.main.pressure}</Segment>
              </Segment.Group>
              <Segment.Group horizontal>
                <Segment>Tempeature</Segment>
                <Segment>{data.main.temp}</Segment>
              </Segment.Group>
              <Segment.Group horizontal>
                <Segment>Wind Speed</Segment>
                <Segment>{data.wind.speed}</Segment>
              </Segment.Group>
              <Segment.Group horizontal>
                <Segment>Wind Deg</Segment>
                <Segment>{data.wind.deg}</Segment>
              </Segment.Group>
              <Segment.Group horizontal>
                <Segment>Today Sky</Segment>
                <Segment>{data.weather[0].main}</Segment>
              </Segment.Group>
            </Segment.Group>
          </>
        ) : (
          <>
            {loading?(<LoaderComponent/>):(<h3>Please enter your place</h3>)}
          </>
        )}
      </Segment>
    </>
  );
};

export default Result;
