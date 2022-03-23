import React from 'react'

import { Link } from "react-router-dom";
import {Card,Button, Row, Col} from 'react-bootstrap'

function NotFound() {
  return (
    <Row className='d-flex justify-content-center'>
        <Col md={6}>
        <Card >
        <Card.Body>
            <Card.Title>404 ! Page Not Found...</Card.Title>
            <Card.Text>
        Sorry! The page your are looking for could not be found. Thanks..
            </Card.Text>
            <Button to='/' as={Link} variant="primary">Go to Home</Button>
        </Card.Body>
        </Card>
        </Col>
    </Row>
  )
}

export default NotFound