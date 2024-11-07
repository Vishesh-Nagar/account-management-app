import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

function Login() {
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [register, setRegister] = useState(false); // Default to false to show login first

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    function handleLogin(e) {
        e.preventDefault();
        const storedEmail = JSON.parse(localStorage.getItem("Email"));
        const storedPassword = JSON.parse(localStorage.getItem("Password"));

        if (!emailLog || !passwordLog) {
            setErrorMessage("Both fields are required.");
        } else if (passwordLog !== storedPassword || emailLog !== storedEmail) {
            setErrorMessage("Invalid email or password.");
        } else {
            setErrorMessage("");
            // Redirect to the Details page after successful login
            navigate("/details");
        }
    }

    function handleClick() {
        setRegister(!register); // Toggle between Login and Register
    }

    return (
        <div>
            {register ? (
                <Register />
            ) : (
                <form onSubmit={handleLogin}>
                    <h3>Log In</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmailLog(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPasswordLog(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                    >
                        Log In
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary btn-sm mt-2 btn-block"
                        onClick={handleClick}
                    >
                        Register
                    </button>

                    {errorMessage && (
                        <Alert variant="warning">{errorMessage}</Alert>
                    )}
                </form>
            )}
        </div>
    );
}

export default Login;
