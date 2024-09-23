import React, { useState } from 'react';

const PasswordInput = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setPasswordError('Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.');
    } else {
      setPasswordError('');
    }
    onPasswordChange(value, !validatePassword(value));
  };

  return (
    <div className="form-group">
      <label>Password :</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        className={passwordError ? 'error-input' : ''}
        required
      />
      {passwordError && <small className="error-text">{passwordError}</small>}

      <div className="form-group">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        /> Show Password
      </div>
    </div>
  );
};

export default PasswordInput;
