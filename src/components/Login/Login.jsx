import React from 'react';
import { FaBuilding } from "react-icons/fa";
import "./login.css"
import { useNavigate } from 'react-router';
const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/register")
    }
    return (
        <div className="login-container shadow-lg">
            <div className="login-header">
                <FaBuilding className="login-logo" />
                <h3>Create Account</h3>
                <p className="login-subtitle">Log in to your account</p>
            </div>

            <form className="login-form">

                {/* Email */}
                <div className="input-field">
                    <span className="fieldset-legend">Email</span>
                    <div className="input-wrapper">
                        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="input-box"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="input-field">
                    <span className="fieldset-legend">Password</span>
                    <div className="input-wrapper">
                        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            className="input-box"
                        />
                    </div>
                </div>

                {/* Initial Amount */}

                <button type="submit" className="login-btn">Login</button>
                <p className="login-subtitle mt-5">Don't have an account? <span className="link" onClick={handleNavigate} >Create Account</span></p>
            </form>
        </div>
    );
};

export default Login;