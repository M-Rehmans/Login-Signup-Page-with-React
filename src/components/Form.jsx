import React from "react";

// import Input from "./Input";
// import Label from "./Label";

function Form({ isSignup }) {
  return (
    <form id={isSignup ? "signupForm" : "loginForm"} noValidate>
      {/* Changed novalidate to camelCase noValidate */}
      {isSignup && (
        <div className="form-group">
          <label htmlFor="signupName">Full Name</label>
          <input
            type="text"
            id="signupName"
            placeholder="Enter your full name"
            autocomplete="name"
          />
          <small className="error-message" id="signupNameError"></small>
        </div>
      )}
      <div className="form-group">
        <label htmlFor={isSignup ? "signupEmail" : "loginEmail"}>
          Email Address
        </label>
        {/* Changed for to htmlFor */}
        <input
          type="email"
          id={isSignup ? "signupEmail" : "loginEmail"}
          placeholder="Enter your email"
          autoComplete="email"
        />
        {/* Added self-closing slash */}
        <small
          className="error-message"
          id={isSignup ? "signupEmailError" : "loginEmailError"}
        ></small>
      </div>
      <div className="form-group">
        <label htmlFor={isSignup ? "signupPassword" : "loginPassword"}>
          Password
        </label>
        {/* Changed for to htmlFor */}
        <div className="password-box">
          <input
            type="password"
            id={isSignup ? "signupPassword" : "loginPassword"}
            placeholder={isSignup ? "Create a password" : "Enter your password"}
            autoComplete={isSignup ? "new-password" : "current-password"}
          />
          {/* Added self-closing slash */}
          <button
            type="button"
            className="password-toggle"
            id={isSignup ? "signupPasswordToggle" : "loginPasswordToggle"}
          >
            Show
          </button>
        </div>
        {isSignup && (
          <small className="password-hint">
            Minimum 8 characters, including a number.
          </small>
        )}
        <small
          className="error-message"
          id={isSignup ? "signupPasswordError" : "loginPasswordError"}
        ></small>
      </div>
      {isSignup && (
        <div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <div className="password-box">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                autocomplete="new-password"
              />

              <button
                type="button"
                className="password-toggle"
                id="confirmPasswordToggle"
              >
                Show
              </button>
            </div>

            <small className="error-message" id="confirmPasswordError"></small>
          </div>
          <label className="terms">
            <input type="checkbox" id="terms" />
            <span>I agree to the Terms & Conditions</span>
          </label>

          <small className="error-message" id="termsError"></small>
        </div>
      )}

      {!isSignup && (
        <div className="form-options">
          <label className="remember-me">
            <input type="checkbox" id="rememberMe" />
            {/* Added self-closing slash */}
            <span>Remember me</span>
          </label>
          <a href="#" className="forgot-link">
            Forgot Password?
          </a>
        </div>
      )}

      <button type="submit" className="auth-btn">
        {isSignup ? "Create Account" : "Login"}
      </button>
      <p className="switch-text">
        {isSignup ? `Already have an account?` : `Don't have an account?`}
        <a href="login.html">{isSignup ? "Login" : "Create Account"}</a>
      </p>
    </form>
  );
}

export default Form;
