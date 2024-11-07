'use client'
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hide the login form and show the loading spinner
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const spinnerContainer = document.getElementById('spinner-container') as HTMLElement;
    const mainContent = document.getElementById('main-content') as HTMLElement;

    loginForm.style.display = 'none';
    spinnerContainer.style.display = 'flex';

    // Simulate an API request or login process
    setTimeout(() => {
      spinnerContainer.style.display = 'none';
      mainContent.style.display = 'block';
      const heroText = document.querySelector('.hero-text h2') as HTMLElement;
      if (heroText) {
        heroText.textContent = `Welcome, ${name}!`;
      }
    }, 2000);
  };

  return (
    <div className="login-form" id="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
