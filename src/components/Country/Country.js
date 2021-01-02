import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log('props', props);
    const { name, flag, capital, population } = props.country;
    const handleAddCountry = props.handleAddCountry;
    // console.log('handleAddCountry', handleAddCountry);
    return (
        <div className="country-container">
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <img src={flag} alt="" />
            <h5>Population: {population}</h5>
            <button className="addCountry" onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;