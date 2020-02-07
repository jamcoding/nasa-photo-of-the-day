import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoContent from './PhotoContent';

const PhotoContainer = () => {
    const [nasa, setNasa] = useState([]);
    const effectCallBackFn = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => setNasa(response.data))
            .catch(error => console.log(error));
    }
    
    useEffect(effectCallBackFn, []);

    console.log('initial render', nasa);

    return (
        <div className="photo-card-container">
            <PhotoContent data={nasa} /> 
        </div>
    );
};
export default PhotoContainer;