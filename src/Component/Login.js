import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form className='mx-lg-5 container mt-3' >
            <Form.Group className="mb-3 mx-lg-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3 mx-lg-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <p className='mx-lg-5'>Don't have an account? Please <Link to='/signup'>Register.</Link></p>

            <Button className="mb-3 mx-lg-5" variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger mx-5">

            </Form.Text>
        </Form>
    );
};

export default Login;