import React from "react";

// import Input from "./Input";
// import Label from "./Label";

function Form(props) {
  return (
    <form id={props.formType ? "signupForm" : "loginForm"} noValidate>
      {/* Changed novalidate to camelCase noValidate */}
      {props.formType && (
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
        <label htmlFor={props.formType ? "signupEmail" : "loginEmail"}>
          Email Address
        </label>
        {/* Changed for to htmlFor */}
        <input
          type="email"
          id={props.formType ? "signupEmail" : "loginEmail"}
          placeholder="Enter your email"
          autoComplete="email"
        />
        {/* Added self-closing slash */}
        <small
          className="error-message"
          id={props.formType ? "signupEmailError" : "loginEmailError"}
        ></small>
      </div>
      <div className="form-group">
        <label htmlFor={props.formType ? "signupPassword" : "loginPassword"}>
          Password
        </label>
        {/* Changed for to htmlFor */}
        <div className="password-box">
          <input
            type="password"
            id={props.formType ? "signupPassword" : "loginPassword"}
            placeholder={props.formType ? "Create a password" : "Enter your password"}
            autoComplete={props.formType ? "new-password" : "current-password"}
          />
          {/* Added self-closing slash */}
          <button
            type="button"
            className="password-toggle"
            id={props.formType ? "signupPasswordToggle" : "loginPasswordToggle"}
          >
            Show
          </button>
        </div>
        {props.formType && (
          <small className="password-hint">
            Minimum 8 characters, including a number.
          </small>
        )}
        <small
          className="error-message"
          id={props.formType ? "signupPasswordError" : "loginPasswordError"}
        ></small>
      </div>
      {props.formType && (
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

      {!props.formType && (
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
        {props.formType ? "Create Account" : "Login"}
      </button>
      <p className="switch-text">
        {props.formType ? `Already have an account?` : `Don't have an account?`}
        {/* <a href="login.html">{props.formType ? "Login" : "Create Account"}</a> */}
        <span className=""></span>
      </p>
    </form>
  );
}

export default Form;
