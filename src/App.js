import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Count from './components/Count/Count';

function App() {

  const [countries, setCountries] = useState([]);

  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleAddCountry = (country) => {
    const newCount = [...count, country];
    setCount(newCount);
  }

  return (
    <div className="App">
      <div className="header-container">
        <h1>Country Loaded: {countries.length}</h1>
        <h3>Country Added: {count.length}</h3>
        <Count count={count}></Count>
      </div>

      {
        countries.map(item => <Country country={item} handleAddCountry={handleAddCountry} key={item.alpha2Code}></Country>)
      }
    </div>
  );
}

export default App;
