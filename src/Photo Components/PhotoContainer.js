import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoContent from './PhotoContent';
<<<<<<< HEAD
const PhotoContainer = () => {
    const [nasa, setNasa] = useState([]);
=======

const PhotoContainer = () => {
    const [nasa, setNasa] = useState([]);

>>>>>>> 8f55f6381c1a67328af3a260023a25c4920a56c1
    const effectCallBackFn = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => setNasa(response.data))
            .catch(error => console.log(error));
    }
    
    useEffect(effectCallBackFn, []);
<<<<<<< HEAD
=======

>>>>>>> 8f55f6381c1a67328af3a260023a25c4920a56c1
    console.log('initial render', nasa);

    return (
        <div className="photo-card-container">
            <PhotoContent data={nasa} /> 
        </div>
    );
};
<<<<<<< HEAD
=======

>>>>>>> 8f55f6381c1a67328af3a260023a25c4920a56c1
export default PhotoContainer;