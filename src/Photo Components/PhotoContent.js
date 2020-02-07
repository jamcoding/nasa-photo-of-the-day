import React from 'react';

const PhotoContent = props => {
    console.log(props);
    return (
        <div className="section">
            <div className="inner-container">
                <img className="photo-image" src={props.data.url} alt="ADOP"/>
            </div>
            <div className="inner-container">
                <h1>Photo of the day</h1>
                <h3>{props.data.title}</h3>
                <p className="center">By: {props.data.copyright}</p>
                <p>Today's date: {props.data.date}</p>
                <p className="description">Description: {props.data.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoContent;
