import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"
import {Container, Row, Col, roundedCircle} from "react-bootstrap"
import Image from 'react-bootstrap/Image'

const Homepage = () => {

    return (

        <div>
          <p>Home page content</p>
          <div className="btn-display">
            <div>
            <button><Link to="/waterform">Add(water)</Link></button>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Row>
            </Container>
            </div>
            <div>
            <button><Link to="/exerciseform">Add(exercise)</Link></button>
            </div>
            <div>
            <button><Link to="/foodform">Add(food)</Link></button>
            </div>
          </div>
        </div>
    );
}

export default Homepage