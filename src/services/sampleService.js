import React, { useState, useEffect } from 'react';
import { SampleComponent } from '../components/sampleComponent';

function SampleService() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://urcourseplannerbff.azurewebsites.net/WeatherForecast')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <SampleComponent data={data}/>
    )
}

export default SampleService;