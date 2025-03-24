import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && username === storedUser.username && password === storedUser.password) {
      setAuth(true);
      navigate("/Home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", backgroundColor: "#1e3a8a", color: "white", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ marginBottom: "30px" }}>Welcome</h2>
        <button onClick={() => navigate("/login")} style={buttonStyle}>Login</button>
        <button onClick={() => navigate("/signup")} style={buttonStyle}>Sign Up</button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", background: "url('https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/294650352_2283062858515396_27152930538465209_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_eui2=AeEUXrpy6tILBbPMsVy6ygUZfhAMr67WfYt-EAyvrtZ9i5HTEvl0ob1375Dyh31aLd4QF4USabQSM1jFMVq2byGP&_nc_ohc=mIkIm4NNKpQQ7kNvgHo1xKz&_nc_oc=Adj4FBKZfkovB1yxYcoVenyPlUyXbz5hovrC1Ni1lTUm-DNaIK_8pQXb0HySQw0r1eE&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=AGJRiyN0td1rF6rkeFqpLQH&oh=00_AYFcAPthbgY3MjifL596gBP2eylv6vftUr9oTxerwZlJwQ&oe=67D749CD') no-repeat center center/cover" }}>
        <div style={{ padding: "30px", width: "350px", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "12px", textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", color: "#333" }}>
          <h2 style={{ color: "#1e3a8a" }}>Login</h2>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          <button onClick={handleLogin} style={loginButtonStyle}>Login</button>
          <p onClick={() => navigate("/signup")} style={{ cursor: "pointer", color: "#1e3a8a", marginTop: "10px" }}>Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  backgroundColor: "#ffffff",
  color: "#1e3a8a",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const loginButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#1e3a8a",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px"
};

export default Login;
