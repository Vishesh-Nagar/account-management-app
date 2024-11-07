import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = { email, password };
        onLogin(userInfo);
    };

    return (
        <div className="card p-4">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            <div className="mt-3">
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-secondary">
                    Go to Registration
                </Link>
            </div>
        </div>
    );
}

export default Login;
