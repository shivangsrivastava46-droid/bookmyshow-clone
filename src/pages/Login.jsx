import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("bookmyshowUser"));

    if (!user) {
      setMessage("No account found. Please create an account first.");
      return;
    }

    if (user.email !== email || user.password !== password) {
      setMessage("Invalid email or password.");
      return;
    }

    localStorage.setItem("bookmyshowLoggedIn", "true");

    setMessage("Login successful!");

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link to="/" className="auth-logo">
          book<span>my</span>show
        </Link>

        <h1>Welcome Back</h1>
        <p>Login to continue.</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="form-message">{message}</p>}

        <p className="switch">
          Don't have an account?{" "}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;