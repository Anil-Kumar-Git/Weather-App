import React from "react";
import { Image, Segment, Table } from "semantic-ui-react";
import LoaderComponent from "../common/loader";
import MessageBlock from "../common/message";

const Result = ({ message, color, data, loading }) => {
  const KtoC = (k) => {
    return (k - 273.15).toFixed(2) + "^ C";
  };
  const currentDateTime = Date().toLocaleString();
  return (
    <>
      <Segment>
        {message ? <MessageBlock message={message} color={color} /> : ""}
        {loading ? <LoaderComponent />: (
          <>
            {data ? (
              <>
                <Segment color="green">
                  {currentDateTime}
                  <Image
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt="weather Icon"
                  ></Image>
                  {data.name} ( {data.sys.country} ) ({KtoC(data.main.temp)}){" "}
                  {data.weather[0].description}
                </Segment>

                <Table color="olive" columns={2}>
                  <Table.Row>
                    <Table.Cell active>
                      <th>Feels Like</th>
                    </Table.Cell>
                    <Table.Cell active>{data.main.feels_like} </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Humidity</Table.Cell>
                    <Table.Cell>{data.main.humidity}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell active>Pressure</Table.Cell>
                    <Table.Cell active>{data.main.pressure}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Tempeature</Table.Cell>
                    <Table.Cell>{data.main.temp}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell active>Wind Speed</Table.Cell>
                    <Table.Cell active>{data.wind.speed}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Wind Deg</Table.Cell>
                    <Table.Cell>{data.wind.deg}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell active>Today Sky</Table.Cell>
                    <Table.Cell active>{data.weather[0].main}</Table.Cell>
                  </Table.Row>
                  <Table.Row positive>
                    <Table.Cell > See your weather and lets enjoy your day </Table.Cell>
                    <Table.Cell></Table.Cell>
                  </Table.Row>
                </Table>
              </>
            ) : (
              <h3>Please enter your place ...</h3>
            )}
          </>
        )}
      </Segment>
    </>
  );
};

export default Result;
