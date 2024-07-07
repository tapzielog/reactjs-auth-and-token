import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import { useAuth } from '../context/AuthContext';

const AppRouter = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />}
                />
                <Route path="/dashboard" element={<ProtectedRoute />} />
            </Routes>
        </Router>
    );
};

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return <Dashboard />;
};

export default AppRouter;
