import React, { useState } from 'react';

const EmailInput = ({ onEmailChange }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
    onEmailChange(value, !validateEmail(value));
  };

  return (
    <div className="form-group">
      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="user@example.com"
        className={emailError ? 'error-input' : ''}
        required
      />
      {emailError && <small className="error-text">{emailError}</small>}
    </div>
  );
};

export default EmailInput;
