import React, { useState } from "react";
import "./register.css";
import { FaBuilding } from "react-icons/fa";
import { useNavigate } from "react-router";

const Register = ({ handleRegister }) => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [initialAmount, setInitialAmount] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            balance: Number(initialAmount)
        }

        handleRegister(user)

        navigate("/login")
    }

    return (
        <div className="register-container shadow-lg">
            <div className="register-header">
                <FaBuilding className="register-logo" />
                <h3>Create Account</h3>
                <p className="register-subtitle">Join us and start banking today</p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>

                <div className="input-field">
                    <span className="fieldset-legend">Your Name</span>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-box"
                        />
                    </div>
                </div>

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

                <div className="input-field">
                    <span className="fieldset-legend">Initial Amount</span>
                    <div className="input-wrapper">
                        <input
                            type="number"
                            placeholder="Initial Amount"
                            required
                            value={initialAmount}
                            onChange={(e) => setInitialAmount(e.target.value)}
                            className="input-box"
                        />
                    </div>
                </div>

                <button type="submit" className="register-btn">Create Account</button>

                <p className="register-subtitle mt-5">
                    Already have an account? <span className="link" onClick={() => navigate("/login")}>Log in</span>
                </p>

            </form>
        </div>
    );
};

export default Register;
