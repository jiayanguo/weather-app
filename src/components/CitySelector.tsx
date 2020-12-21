import React from "react";
import { useState } from "react";
import {Button, Col, FormControl, Row} from 'react-bootstrap';

const CitySelector = (props:any) => {
    const [city, setCity] = useState('');
    return (
        <>
            <Row>
                <Col>
                    <h1>Search your city</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <FormControl 
                    placeholder = "Enter City"
                    onChange = {(event: any) => setCity(event.target.value)}
                    value = {city}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => props.onSearch(city)}>Check Weather</Button>
                </Col>
            </Row>
        </>

    )
}

export default CitySelector;