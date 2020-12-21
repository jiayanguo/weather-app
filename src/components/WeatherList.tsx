import React from "react"
import { Col, Row } from "react-bootstrap"
import WeatherCard from "./WeatherCard"

const WeatherList = ( (props:any) => {

    return (
        <Row>
            {props.weathers.map((item: any) => {
                return <Col key= {item.dt}>
                    <WeatherCard temp_max={item.main.temp_max} temp_min={item.main.temp_min} dt={item.dt * 1000} main={item.weather[0].main} icon={item.weather[0].icon}/>
                </Col>
            })}
        </Row>
    )
})

export default WeatherList;