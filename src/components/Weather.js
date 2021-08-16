import React from "react";
import { Button, Card } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faCloud,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment";
import "./weather.css";

function WeatherCard({ weatherData }) {
  const refresh = () => {
    window.location.reload();
  };

  let weatherIcon = null;

  if (weatherData.weather[0].main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (weatherData.weather[0].main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <Card>
      <Card.Content>
        <Button
          circular
          color="blue"
          floated="right"
          size="mini"
          icon="refresh"
          onClick={refresh}
        ></Button>
        <Card.Header>
          {weatherIcon} {weatherData.name} -{" "}
          <strong>{weatherData.weather[0].main}</strong>
        </Card.Header>
        <Card.Meta>{weatherData.weather[0].description}</Card.Meta>
        <Card.Description>
          <p></p>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          {" "}
          {moment().format("dddd")}, <span>{moment().format("LL")}</span>
        </p>
      </Card.Content>
    </Card>
  );
}

export default WeatherCard;
