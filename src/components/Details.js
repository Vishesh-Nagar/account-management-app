import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Details() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [editing, setEditing] = useState(false); // State to toggle between view and edit mode
    const [message, setMessage] = useState(""); // Message for errors or empty details

    // Handler to update user details in the state and localStorage
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    // Function to handle saving updated details
    const handleSaveChanges = () => {
        if (!userDetails.name || !userDetails.email || !userDetails.phone) {
            setMessage("All fields are required.");
            return;
        }

        // Save updated details to localStorage
        localStorage.setItem("Name", JSON.stringify(userDetails.name));
        localStorage.setItem("Email", JSON.stringify(userDetails.email));
        localStorage.setItem("Phone", JSON.stringify(userDetails.phone));

        setMessage("User details updated successfully!"); // Success message
        setEditing(false); // Exit edit mode after saving
    };

    useEffect(() => {
        // Retrieve user details from localStorage
        const storedName = JSON.parse(localStorage.getItem("Name"));
        const storedEmail = JSON.parse(localStorage.getItem("Email"));
        const storedPhone = JSON.parse(localStorage.getItem("Phone"));

        // If details are found, set them in the state, otherwise redirect to login
        if (storedName && storedEmail && storedPhone) {
            setUserDetails({
                name: storedName,
                email: storedEmail,
                phone: storedPhone,
            });
        } else {
            setMessage("User details not found. Please log in again.");
            setTimeout(() => {
                window.location.href = "/login"; // Redirect to login page
            }, 3000);
        }
    }, []);

    return (
        <div className="container mt-5">
            <h3>User Details</h3>
            {message && (
                <div className={`alert ${message.includes("successfully") ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
            )} {/* Show error or success message */}

            {/* Toggle between viewing and editing user details */}
            {editing ? (
                // Edit Mode Form
                <Form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={userDetails.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone No.</label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={userDetails.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button
                        variant="success"
                        className="mt-3"
                        onClick={handleSaveChanges}
                    >
                        Save Changes
                    </Button>
                    <Button
                        variant="secondary"
                        className="mt-3 ms-2"
                        onClick={() => setEditing(false)} // Cancel edit mode
                    >
                        Cancel
                    </Button>
                </Form>
            ) : (
                // View Mode - Show user details
                <>
                    <div className="form-group">
                        <label>Name</label>
                        <p className="form-control-plaintext">{userDetails.name}</p>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <p className="form-control-plaintext">{userDetails.email}</p>
                    </div>
                    <div className="form-group">
                        <label>Phone No.</label>
                        <p className="form-control-plaintext">{userDetails.phone}</p>
                    </div>

                    {/* Button to enable editing */}
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={() => setEditing(true)} // Switch to edit mode
                    >
                        Edit Details
                    </Button>
                </>
            )}

            {/* Button to go back to the login page */}
            <div className="d-flex justify-content-center mt-3">
                <Button
                    variant="secondary"
                    onClick={() => window.location.href = "/login"} // Redirect to login page
                >
                    Go to Login
                </Button>
            </div>
        </div>
    );
}

export default Details;
