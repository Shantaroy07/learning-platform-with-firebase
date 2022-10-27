import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.uid) {
                    navigate(from, { replace: true });
                }
                else {
                    console.error('Your email is not valid. Please enter a valid  email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={handleSubmit} className='mx-lg-5 container mt-3' >
            <Form.Group className="mb-3 mx-lg-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3 mx-lg-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />

            </Form.Group>
            <p className='mx-lg-5 text-danger'>{error}</p>
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