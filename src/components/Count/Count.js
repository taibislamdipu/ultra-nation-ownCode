import React from 'react';

const Count = (props) => {

    const country = props.count;

    const totalPopulation = country.reduce((sum, country) => sum + country.population, 0);

    return (
        <div>
            <h4>Total {props.count.length} Country Population: {totalPopulation}</h4>
        </div>
    );
};

export default Count;