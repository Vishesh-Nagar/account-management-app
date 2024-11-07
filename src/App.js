import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import "./App.css";

function App() {
    const [user, setUser] = React.useState(null);
    const [message, setMessage] = React.useState("");

    const handleLogin = (userInfo) => {
        setUser(userInfo);
        setMessage("Logged in successfully");
        clearMessageAfterDelay();
    };

    const handleLogout = () => {
        setUser(null);
        setMessage("Logged out successfully");
        clearMessageAfterDelay();
    };

    const handleRegister = (userInfo) => {
        setUser(userInfo);
        setMessage("Registered successfully");
        clearMessageAfterDelay();
    };

    const clearMessageAfterDelay = () => {
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    };

    return (
        <Router>
            <div className="container mt-4">
                {message && (
                    <div className="alert alert-success">{message}</div>
                )}
                <Routes>
                    <Route
                        path="/login"
                        element={
                            !user ? (
                                <Login onLogin={handleLogin} />
                            ) : (
                                <Navigate to="/account" />
                            )
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            !user ? (
                                <Register onRegister={handleRegister} />
                            ) : (
                                <Navigate to="/account" />
                            )
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            user ? (
                                <Account user={user} onLogout={handleLogout} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="*"
                        element={<Navigate to={user ? "/account" : "/login"} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
