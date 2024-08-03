import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Routes>
              <Route index element={<Homepage />} />
              {/* Add other routes that should include the navbar here */}
            </Routes>
          </>
        } />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;