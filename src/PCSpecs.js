import { Link, useNavigate } from "react-router-dom";

function PCSpecs() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear saved user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      {/* Background Image */}
      <div style={{
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        background: "url('https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/294650352_2283062858515396_27152930538465209_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeEUXrpy6tILBbPMsVy6ygUZfhAMr67WfYt-EAyvrtZ9i5HTEvl0ob1375Dyh31aLd4QF4USabQSM1jFMVq2byGP&_nc_ohc=mIkIm4NNKpQQ7kNvgHo1xKz&_nc_oc=Adj4FBKZfkovB1yxYcoVenyPlUyXbz5hovrC1Ni1lTUm-DNaIK_8pQXb0HySQw0r1eE&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AGJRiyN0td1rF6rkeFqpLQH&oh=00_AYFcAPthbgY3MjifL596gBP2eylv6vftUr9oTxerwZlJwQ&oe=67D749CD') no-repeat center center/cover", 
        filter: "brightness(50%)"
      }}></div>
      
      {/* Sidebar */}
      <div style={{ width: "250px", backgroundColor: "#1e3a8a", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
        <h2 style={{ marginBottom: "30px" }}>PC Specs</h2>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/about-me" style={linkStyle}>About Me</Link>
        <Link to="/contact-me" style={linkStyle}>Contact Me</Link>
        <Link to="/pc-specs" style={linkStyle}>My PC Specs</Link>
        <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button> {/* Logout Button */}
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "50px", position: "relative", zIndex: 1, color: "white" }}>
        <div style={{ padding: "30px", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "12px", textAlign: "center", maxWidth: "900px", color: "#333" }}>
          <h1 style={{ color: "#1e3a8a" }}>My PC Specifications</h1>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><strong>CPU:</strong> Intel Core i7-12700F</li>
            <li><strong>GPU:</strong> RTX 4070 Super MSI Dual Ventus</li>
            <li><strong>RAM:</strong> Kingston Fury DDR5 32GB</li>
            <li><strong>Storage:</strong> 1TB Samsung SSD + 1TB Kingston SSD</li>
            <li><strong>PSU:</strong> 850W TUF Gold 80+ Fully Modular</li>
            <li><strong>Cooling:</strong> DarkFlash DV360S AIO</li>
            <li><strong>Fans:</strong> Jungle Leopard Interstellar</li>
            <li><strong>Motherboard:</strong> MSI MAG B760 Tomahawk</li>
          </ul>

          <h2 style={{ color: "#1e3a8a", marginTop: "20px" }}>My Peripherals</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><strong>Keyboard:</strong> ROG Azoth</li>
            <li><strong>Mouse:</strong> ROG Keris II Ace</li>
            <li><strong>Webcam:</strong> ROG Eye S</li>
            <li><strong>Monitor:</strong> ROG XG27ACS</li>
            <li><strong>Headphones:</strong> Razer Barracuda</li>
            <li><strong>Speakers:</strong> Creative Pebble</li>
          </ul>
        </div>
      </div>
    </div>
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

const logoutButtonStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "#e63946",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px"
};

export default PCSpecs;
