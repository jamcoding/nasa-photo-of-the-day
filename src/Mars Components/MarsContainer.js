import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarsContent from './MarsContent';

const MarsContainer = () => {
    const [mars, setMars] = useState([]);

    const effectMarsCallBackFn = () => {
        axios
            .get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY')
            .then(response => setMars(response.data))
            .catch(error => console.log(error));
    }

    useEffect(effectMarsCallBackFn, []);

    console.log('initial Mars render', mars);

    return (
        <div className="mars-container">
            {mars.map(marss => (
                <MarsContent key={marss.id} data={mars} />
            ))}
        </div>
    );
};

export default MarsContainer;