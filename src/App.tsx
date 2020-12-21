import React from 'react';
import './App.css';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector';
import { API_BASE_URL, API_KEY } from './config/config';

function App() {
  const {data, error, isLoading, setUrl} = UseFetch('');

  const getContent = () : any => {
    if (error) return <h2> Error when fetching: {error} </h2>;
    if (!data && isLoading) return <h2>LOADING</h2>;
    if (!data) return null;
    return <WeatherList weathers = {data.list} />;
  }
  return (
    <Container className="App">
      <CitySelector onSearch= {(city: string) =>setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />
      {getContent()}
    </Container>
  );
}

export default App;
