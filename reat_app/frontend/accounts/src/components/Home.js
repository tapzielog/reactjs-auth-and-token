import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode from jwt-decode

const Home = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (token) => {
        try {
            const decodedToken = jwtDecode(token);
    
            setIsAuthenticated(true);
            localStorage.setItem('token', token);
            navigate('/dashboard');
            window.history.replaceState(null, null, '/dashboard');
        } catch (error) {
            console.error('Error decoding token:', error);
            setError('Invalid token specified');
            setShowModal(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulated token for demo purposes (in real scenario, get token from backend)
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWFjdC1hcHAiLCJuYW1lIjoiY2hvY290YXB6IiwiaWF0IjoxNTE2MjM5MDIyfQ.X8bAuqxAaf3s86nCHQ_WtYH1pDZms5okihzkaUYuaXg';

        // Example validation logic:
        if (usernameOrEmail === 'admin' && password === 'admin') {
            handleLogin(token);
        } else {
            setError('Invalid username or password');
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setError('');
    };

    return (
        <div className="container">
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-4'>
                    <div className="wrapper">
                        <div className="title"><span>Login Form</span></div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Username or Email"
                                    value={usernameOrEmail}
                                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="row">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="pass"><a href="#">Forgot password?</a></div>
                            <div className="row button">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal show={showModal} message={error} handleClose={handleCloseModal} />
        </div>
    );
}

export default Home;
