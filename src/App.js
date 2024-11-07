import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Details from "./components/Details";

function App() {
    return (
        <div className="App">
            <div className="outer">
                <div className="inner">
                    <Router>
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/details" element={<Details />} />{" "}
                            <Route path="/" element={<Register />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
