import React, { useState } from 'react';
import StandardLayout from '../components/layout/StandardLayout';
import './Contact.css'; // Add your custom CSS file for styling

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [issueType, setIssueType] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleIssueTypeChange = (e) => {
    setIssueType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to the backend
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Issue Type:', issueType);

      // Show an alert when the form is submitted
      alert('We have received your valuable feedback!');
        // Redirect the user to the homepage
    window.location.href = '/contact';
  };


  return (
    <StandardLayout>
      <div className="contact-container">
        <h2>How can we help?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="issueType">Issue Type:</label>
            <select
              id="issueType"
              value={issueType}
              onChange={handleIssueTypeChange}
              required
            >
              <option value="" disabled>
                Select an issue type
              </option>
              <option value="bug">Bug</option>
              <option value="feature-request">Feature Request</option>
              <option value="general-inquiry">General Inquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              placeholder="Enter your message..."
              value={message}
              onChange={handleMessageChange}
              required
            />
          </div>

         
          <div className='btncon'>
           <button  type="submit">Submit</button>
           </div>
           
        </form>
      </div>
    </StandardLayout>
  );
};

export default Contact;
