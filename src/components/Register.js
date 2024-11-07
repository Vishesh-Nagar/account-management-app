import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [login, setLogin] = useState(false); // Start with login being false

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate(); // Use useNavigate hook for navigation

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            setErrorMessage("All fields are required.");
        } else {
            // Save user details to localStorage
            localStorage.setItem("Name", JSON.stringify(name));
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            localStorage.setItem("Phone", JSON.stringify(phone));

            console.log("User registered successfully.");

            setLogin(true); // Switch to login screen
            setErrorMessage(""); // Clear any error messages

            // Redirect to the Details page after successful registration
            navigate("/details");
        }
    }

    function handleClick() {
        setLogin(!login); // Toggle between Register and Login
    }

    return (
        <div>
            {login ? (
                <Login />
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Full Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone No.</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter contact no"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                    >
                        Register
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary btn-sm mt-2 btn-block"
                        onClick={handleClick}
                    >
                        Login
                    </button>

                    {errorMessage && (
                        <Alert variant="danger">{errorMessage}</Alert>
                    )}
                </form>
            )}
        </div>
    );
}

export default Register;
