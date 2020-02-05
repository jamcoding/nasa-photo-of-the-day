import React from 'react';

const PhotoContent = props => {
    console.log(props.url);
    return (
        <div className="photo-card">
            <h1>Photo of the day</h1>
            <img className="photo-image" src={props.url} alt="image of the day"/>
            <p>By: {props.copyright}</p>
            <p>Description: {props.explanation}</p>
        </div>
    )
}

export default PhotoContent;