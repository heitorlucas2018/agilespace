import React from 'react';
import {Form,Col} from 'react-bootstrap';

export default function Forms() {
    return (
        <div>
            <Form>
            <Form.Row>
                <Col xs={12} sm={12} md={12}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Por Atividade:</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Por Titulos:</Form.Label>
                    <Form.Control type="email" placeholder="Title" />
                </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Por Label:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
                <Col xs={12} sm={12} md={12}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Por Membros:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Col>
            </Form.Row>
            </Form>
        </div>
    )
}
