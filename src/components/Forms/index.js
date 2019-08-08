import React from 'react';
import {Form,Col} from 'react-bootstrap';

export default function Forms() {
    return (
        <div>
            <Form>
            <Form.Row>
                <Col xs={12} sm={3} md={2}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Coluns</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                </Form.Group>
                </Col>
                <Col xs={12} sm={3} md={2}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
                <Col xs={12} sm={3} md={2}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>ID Card</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
                <Col xs={12} sm={3} md={2}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
            </Form.Row>
            </Form>
        </div>
    )
}
