import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";

const Update = ({ user, setUser }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
    });
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setSuccessMessage("Details updated successfully!");

        setTimeout(() => {
            navigate("/account");
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <h2>Update Details</h2>
            {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
            )}
            <Form
                onSubmit={handleSubmit}
                style={{
                    border: "1px solid #ddd",
                    padding: "20px",
                    borderRadius: "5px",
                }}
            >
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Update Details
                </Button>
            </Form>
        </div>
    );
};

export default Update;
