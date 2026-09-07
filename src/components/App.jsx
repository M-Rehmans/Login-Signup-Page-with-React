import React, {useState} from "react";
import Form from "./Form";

// var isSignup = false;

function App() {
  var [isSignup, formShift] = useState(false);
  function formToggle(e) {
    e.preventDefault();
    formShift(!isSignup);
  }

  return (
    <main className="auth-container">
      <section
        className={`auth-card ${isSignup ? "login-card" : "signup-card"}`}
      >
        <div className="auth-header">
          <div className="logo">L</div>
          <h1>{isSignup ? "Create Account" : "Welcome Back"}</h1>
          <p>{isSignup ? "Sign up to get started" : "Login to your account"}</p>
        </div>
        <Form formType={isSignup} changeForm={formToggle}  />
      </section>
    </main>
  );
}

export default App;
