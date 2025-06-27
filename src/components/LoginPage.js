import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(''); // Clear error when user starts typing
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Add Firebase Authentication here
      // Example:
      // const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;
      
      console.log('Login attempt:', { email, password });
      
      // For now, just simulate a successful login
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to home page or dashboard
        window.location.href = '/';
      }, 1000);
      
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <img src="/logo.svg" alt="Shop Local Hawaii Logo" className="mb-3" style={{ width: '60px', height: '60px' }} />
                <h2 className="card-title">Welcome Back</h2>
                <p className="text-muted">Sign in to your account</p>
              </div>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </div>
              </form>
              
              <div className="text-center mt-4">
                <p className="mb-2">
                  Don't have an account?{' '}
                  <Link to="/form" className="text-decoration-none">
                    Join us here
                  </Link>
                </p>
                <Link to="/" className="text-decoration-none">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 