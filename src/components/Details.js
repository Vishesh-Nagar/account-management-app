import React, { useEffect, useState } from "react";

function Details() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [message, setMessage] = useState(""); // State to hold error or info message

    useEffect(() => {
        // Retrieve user details from localStorage
        const storedName = JSON.parse(localStorage.getItem("Name"));
        const storedEmail = JSON.parse(localStorage.getItem("Email"));
        const storedPhone = JSON.parse(localStorage.getItem("Phone"));

        if (storedName && storedEmail && storedPhone) {
            setUserDetails({
                name: storedName,
                email: storedEmail,
                phone: storedPhone,
            });
        } else {
            // Set message if user details are not found
            setMessage("User details not found. Please log in again.");
            // Redirect to the login page after showing the message
            setTimeout(() => {
                window.location.href = "/login"; // Redirect after 3 seconds
            }, 3000);
        }
    }, []);

    return (
        <div>
            <h3>User Details</h3>
            {/* Display message if details are not found */}
            {message && <div className="alert alert-danger">{message}</div>}

            {/* Display user details if available */}
            {userDetails.name && userDetails.email && userDetails.phone ? (
                <>
                    <div className="form-group">
                        <label>Name</label>
                        <p>{userDetails.name}</p>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <p>{userDetails.email}</p>
                    </div>
                    <div className="form-group">
                        <label>Phone No.</label>
                        <p>{userDetails.phone}</p>
                    </div>
                </>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default Details;
