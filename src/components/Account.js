import React, { useState } from "react";

function Account({ user, onLogout }) {
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account information updated");
    };

    return (
        <div className="card p-4">
            <h3>Account Information</h3>
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
                    Update
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={onLogout}
                >
                    Logout
                </button>
            </form>
        </div>
    );
}

export default Account;
