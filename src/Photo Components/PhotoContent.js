import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const PhotoContent = props => {
    console.log(props);

    return (
        <div>
            <Col xs="12" md="12" lg="12" xl="12">
                <Card>
                    <CardImg src={props.data.url} alt="ADOP"/>
                    <CardBody>
                        <CardTitle>{props.data.title}</CardTitle>
                        <CardSubtitle>{props.data.date}</CardSubtitle>
                        <CardText>By: {props.data.copyright}</CardText>
                        <CardText>Description: {props.data.explanation}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}
export default PhotoContent;
