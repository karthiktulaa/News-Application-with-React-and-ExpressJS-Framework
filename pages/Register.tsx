import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { ErrorMessage } from '../components/auth/ErrorMessage';
import { FormInput } from '../components/auth/FormInput';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (!name || !email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      const newUser = {
        id: Date.now().toString(),
        email,
        name,
      };

      localStorage.setItem('user', JSON.stringify(newUser));
      navigate('/login', { 
        state: { message: 'Registration successful! Please log in with your credentials.' }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Already have an account?"
      linkText="Sign in"
      linkTo="/login"
    >
      <ErrorMessage message={error} />
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <FormInput
            id="name"
            type="text"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            Icon={User}
          />

          <FormInput
            id="email"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            Icon={Mail}
            autoComplete="email"
          />

          <FormInput
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            Icon={Lock}
          />

          <FormInput
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            Icon={Lock}
          />
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent
                   rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium transition-colors
                   duration-200"
        >
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
};