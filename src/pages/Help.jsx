import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Help = () => {
    return <>
        <Container className=" d-flex mt-5 align-items-center justify-content-center">
            <Row>
                <Col>
                    <h2 className={"mb-4"}>This is a demo webpage featuring:</h2>
                    <ul className="text-start">
                        <li>Login, SignUp, Logout, guest mode featuring firebase</li>
                        <li>Product lists crawled from SerpApi</li>
                        <li>Random promotion and dietary options to demo filters</li>
                        <li>Add to cart with sidebar, with estimated subtotal</li>
                        <li>Checkout page and Order history </li>
                    </ul>
                </Col>
            </Row>



        </Container></>
}
export default Help;