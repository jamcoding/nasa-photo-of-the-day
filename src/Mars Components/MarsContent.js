import React from 'react';

const MarsContent = props => {
    console.log(props);
    return (
        <div className="section">
            <div className="inner-container">
                <img src={props.data.img_src} alt="mars photo" />
            </div>
            <div className="inner-container">
            <p>{props.data.earth_date}</p>
            </div>
        </div>
    );
};

export default MarsContent;