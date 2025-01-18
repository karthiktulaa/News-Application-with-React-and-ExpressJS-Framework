import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { AuthLayout } from '../components/auth/AuthLayout';
import { ErrorMessage } from '../components/auth/ErrorMessage';
import { FormInput } from '../components/auth/FormInput';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const message = location.state?.message || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }
      
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        throw new Error('No account found. Please register first.');
      }

      const user = JSON.parse(storedUser);
      if (user.email !== email) {
        throw new Error('Invalid email or password');
      }

      login(user);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Don't have an account?"
      linkText="Sign up"
      linkTo="/register"
    >
      {message && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <p className="text-sm text-green-700">{message}</p>
        </div>
      )}
      
      <ErrorMessage message={error} />
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
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
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent
                   rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2
                   focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium transition-colors
                   duration-200"
        >
          Sign in
        </button>
      </form>
    </AuthLayout>
  );
};