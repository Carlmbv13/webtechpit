import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./Signup";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PCSpecs from "./PCSpecs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Login setAuth={setIsAuthenticated} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/pc-specs" element={<PCSpecs />} />
      </Routes>
    </Router>
  );
}
export default App;
