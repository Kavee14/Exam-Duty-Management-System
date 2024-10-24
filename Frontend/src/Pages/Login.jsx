import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import NavBar1 from "../components/NavBar1.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';
import axios from "../api/axios";

const Login=()=> {
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = { email: '', password: '' };
        let hasErrors = false;

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
            hasErrors = true;
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email';
            hasErrors = true;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
            hasErrors = true;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            hasErrors = true;
        }

        setErrors(newErrors);

        // Check for errors before proceeding to log in
        if (!hasErrors) {
            try{
                await axios.post("/login",{email,password});
                setEmail("");
                setPassword("");
                navigate("/");
            } catch (e) {
                if(e.response.status===422){
                    setErrors(e.response.data.error);
                }
                alert('Login failed. Please check your credentials.'); // Inform the user of failure
            }
        }



    };

    return (
        <div className="login-page">
            <NavBar1/>
            <Container className="mt-5">
                <div className="login-container">
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="text-center mb-4">
                                <img src="/logo.png" alt="EMS Logo" className="logo-img"/>
                            </div>

                            <div className="text-center mb-4">
                                <h4 className="login-title1">Welcome To</h4>
                                <h2 className="login-title">Exam Duty Management System</h2>
                                <p className="login-subtitle">Please log in to your account.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Col md={8}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me"/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} className="text-right">
                                        <a href="/Login" className="clear-link">Do you want to clear?</a>
                                    </Col>
                                </Row>
                                <br/>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" className="login-btn">
                                        Log In
                                    </Button>
                                </div>
                                <br/>
                            </Form>
                            <br/>
                            <div className="text-center mt-3">
                                <p style={{color: '#666666'}}>
                                    New member? <a href="Login.jsx" className="register-link" >Register Now</a>
                                </p>
                            </div>

                        </Col>
                    </Row><br/><br/>
                </div>
            </Container>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default Login;
