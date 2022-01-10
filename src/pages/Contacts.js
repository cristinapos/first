import React from "react";
import {Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormText} from "react-bootstrap";
import './contact.scss'

function Contacts() {
    return (
        <Container className="containerContact">
            <div className="titleContact">
                <h1 className="text-center text-primary">Contact us</h1>
                <p>Send a message by filling out the form below or contact us by phone </p>
            </div>
            <div className="d-flex contactBody">
                <Form className="form">
                    <h3 className="text-center">Contact form</h3>
                    <FormGroup controlId="formBasicEmail">
                        <FormLabel>Email address</FormLabel>
                        <FormControl type="email" placeholder="Enter email"></FormControl>
                        <FormText>
                            We'll never share your email with anyone else
                        </FormText>
                    </FormGroup>
                    <FormGroup controlId="formBasicPassword">
                        <FormLabel>Example textarea</FormLabel>
                        <FormControl as='textarea' rows="3"></FormControl>
                    </FormGroup>
                    <FormGroup controlId="formBasicCheckbox" className="d-flex">
                        <FormCheck type="checkbox" label="Check me out"/>
                    </FormGroup>
                    <Button variant="primary" type="submit">Send</Button>
                </Form>
                <div className="message">
                    <h3 className="text-center">Contacts</h3>
                    <p className="text-md-start">C.P. Srl</p>
                    <p className="text-md-start">Phone: +40/74******</p>
                    <p className="text-md-start">Email: **********@yahoo.com</p>
                </div>
            </div>

        </Container>
    );
}

export default Contacts;
