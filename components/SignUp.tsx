'use client';


import { useState } from 'react';
import { signUp } from 'next-auth/react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const result = await signUp('email', {
      email,
      password,
    });

    if (result.error) {
      // Handle sign-up error, e.g., display an error message.
      console.error('Sign-up error:', result.error);
    } else {
      // Sign-up was successful, you can redirect the user to a success page.
      console.log('Sign-up successful');
      // Redirect the user to another page, e.g., the dashboard.
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
