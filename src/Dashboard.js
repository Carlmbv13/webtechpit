import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import PCSpecs from "./PCSpecs";

function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={
          <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div style={{ width: "250px", backgroundColor: "#1e3a8a", color: "white", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 style={{ marginBottom: "30px" }}>Dashboard</h2>
              <Link to="/home" style={linkStyle}>Home</Link>
              <Link to="/about-me" style={linkStyle}>About Me</Link>
              <Link to="/contact-me" style={linkStyle}>Contact Me</Link>
              <Link to="/pc-specs" style={linkStyle}>My PC Specs</Link>
            </div>
            
            {/* Main Content */}
            <div style={{ flex: 1, padding: "20px", background: "#f4f4f4" }}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/contact-me" element={<ContactMe />} />
                <Route path="/pc-specs" element={<PCSpecs />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

const linkStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  backgroundColor: "#ffffff",
  color: "#1e3a8a",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px"
};

export default Dashboard;