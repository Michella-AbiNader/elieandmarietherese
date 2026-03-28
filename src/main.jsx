import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import InvitationApp from "./Components/Invitation";
import AdminDashboard from "./Components/AdminDashboard";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Invitation */}
      <Route path="/" element={<InvitationApp />} />

      {/* Dashboard */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </BrowserRouter>
);
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
