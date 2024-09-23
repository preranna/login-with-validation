import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (emailValue, hasError) => {
    setEmail(emailValue);
    setEmailError(hasError);
  };

  const handlePasswordChange = (passwordValue, hasError) => {
    setPassword(passwordValue);
    setPasswordError(hasError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      alert("Logged in Successfully.");
      console.log(email, password);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <EmailInput onEmailChange={handleEmailChange} />
        <PasswordInput onPasswordChange={handlePasswordChange} />
        <button type="submit" disabled={emailError || passwordError}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
