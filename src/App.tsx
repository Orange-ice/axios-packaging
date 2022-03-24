import {useEffect} from 'react';
import {getWeather} from './api/weatherService';
import {cancelAllRequest} from './service';
import './App.css';

function App() {

  useEffect(() => {
    // getWeather({lat: '35.5', lon: '-78.5'});
  }, []);


  const getData = async () => {
    const resource = await getWeather({lat: '35.5', lon: '-78.5'});
  }

  return (
    <div className="App">
      App
      <button onClick={getData}>Click</button>
      <button onClick={cancelAllRequest}>Cancel</button>
    </div>
  );
}

export default App;
