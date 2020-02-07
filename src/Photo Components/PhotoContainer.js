import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Row } from "reactstrap";
import PhotoContent from './PhotoContent';

const StyledHeader2 = styled.h2 `
    text-align: center;
`;

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
        <Row>
            <Container>
                <StyledHeader2>Photo of the Day</StyledHeader2>
                <PhotoContent data={nasa} /> 
            </Container>
        </Row>
    );
};

export default PhotoContainer;
