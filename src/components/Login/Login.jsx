import React, { useState } from 'react';
import { FaBuilding } from "react-icons/fa";
import "./login.css"
import { useNavigate } from 'react-router';

const Login = ({ handleLogin }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (e) => {
        e.preventDefault()

        const ok = handleLogin(email, password)

        if (ok) {
            navigate("/")
        } else {
            alert("Invalid email or password")
        }
    }

    return (
        <div className="login-container shadow-lg">
            <div className="login-header">
                <FaBuilding className="login-logo" />
                <h3>Login</h3>
                <p className="login-subtitle">Log in to your account</p>
            </div>

            <form className="login-form" onSubmit={submitLogin}>

                <div className="input-field">
                    <span className="fieldset-legend">Email</span>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-box"
                        />
                    </div>
                </div>

                <div className="input-field">
                    <span className="fieldset-legend">Password</span>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-box"
                        />
                    </div>
                </div>

                <button type="submit" className="login-btn">Login</button>

                <p className="login-subtitle mt-5">
                    Don't have an account? <span className="link" onClick={() => navigate("/register")}>Create Account</span>
                </p>

            </form>
        </div>
    );
};

export default Login;
