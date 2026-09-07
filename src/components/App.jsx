import React, {useState} from "react";
import Form from "./Form";

// var isSignup = false;
var [isSignup, formToggle] = useState(false);

function App() {
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
        <Form isSignup={isSignup} />
      </section>
    </main>
  );
}

export default App;
