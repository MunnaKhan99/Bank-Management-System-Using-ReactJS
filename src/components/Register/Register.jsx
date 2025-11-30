import React from "react";
import "./register.css";
import { FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate("/login");
    }
    return (
        <div className="register-container shadow-lg">
            <div className="register-header">
                <FaBuilding className="register-logo" />
                <h3>Create Account</h3>
                <p className="register-subtitle">Join us and start banking today</p>
            </div>

            <form className="register-form">

                {/* Username */}
                <div className="input-field">
                    <span className="fieldset-legend">Your Name</span>
                    <div className="input-wrapper">
                        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </g>
                        </svg>
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minLength="3"
                            maxLength="30"
                            className="input-box"
                        />
                    </div>
                </div>

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
                <div className="input-field">
                    <span className="fieldset-legend">Initial Amount</span>
                    <div className="input-wrapper">
                        <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1v22"></path>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </g>
                        </svg>
                        <input
                            type="number"
                            placeholder="Initial Amount"
                            min="1"
                            step="0.01"
                            required
                            className="input-box"
                        />
                    </div>
                </div>

                <button type="submit" className="register-btn">Create Account</button>
                <p className="register-subtitle mt-5">Already have an account? <span className="link" onClick={handleNavigate}>Log in</span></p>
            </form>
        </div>
    );
};

export default Register;
