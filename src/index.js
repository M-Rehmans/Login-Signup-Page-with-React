import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "./components/Login.css";
import "./components/Signup.css";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
