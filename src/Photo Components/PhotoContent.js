import React from 'react';

const PhotoContent = props => {
    console.log(props);

    return (
        <div className="photo-card">
            <h1>Photo of the day</h1>
            <img className="photo-image" src={props.data.url} alt="ADOP"/>
            <h3>{props.data.title}</h3>
            <p>By: {props.data.copyright}</p>
            <p>Description: {props.data.explanation}</p>
        </div>
    )
}
export default PhotoContent;
