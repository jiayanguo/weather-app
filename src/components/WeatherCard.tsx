import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = (props: any) => {
  // create a date object with Date class constructor
  const date = new Date(props.dt);
  return (
    <Card>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{props.main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {props.temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {props.temp_max}</p>
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;