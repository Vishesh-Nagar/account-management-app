# AccuManage

AccuManage is a user-friendly account management application built with React, designed to simplify account creation, login, and profile management. The app leverages React Router for seamless page navigation and Bootstrap for a responsive, clean interface. With AccuManage, users can register, log in, and manage their profile details in an intuitive and efficient way.

## Features

### User Registration
New users can sign up by providing their name, email, phone number, and password. Their details are stored in localStorage for authentication during login.

### Login Functionality
Users can securely log in using their email and password. The login form verifies the entered credentials against the stored data.

### Profile Management 
After logging in, users can access and manage their account details, including updating their name, email, and phone number. Changes are reflected in localStorage for persistence.

### Error Handling and Validation
The app provides real-time error handling and validation for registration and login, ensuring that users are informed of incorrect inputs or missing fields.

### Page Navigation
Smooth navigation between the Registration, Login, and Account Details pages with React Router. Users can easily toggle between the login and registration forms.

## Installation
To run the application, follow these steps:

git clone https://github.com/Vishesh-Nagar/accumanage.git

cd accumanage

npm install

npm start


The app will open in your default browser at http://localhost:3000.

## Usage
### Register
Navigate to the registration page by clicking on the "Go to Registration" button on the login page. Provide a valid email, name, phone number, and password to create an account.

### Login
Once registered, you can log in using the email and password you used during registration. If the login is successful, a success message will appear, and you will be redirected to your account page.

### Account Page
After logging in, you can access your account page, where you can view and edit your account details, including your name, email, and phone number. After editing, your changes will be saved and reflected on the page.

### Logout
A "Go to Login" button on the account page allows you to log out, which will redirect you back to the login screen.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or suggestions, please feel free to reach out via email at nagarvishesh16@example.com.
