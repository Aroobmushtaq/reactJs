import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("User Login Successfully")
      navigate("/dashboard");
    } catch (error) {
      console.error("Invalid credentials");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} required />
        <input name="password" type="password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Create an Account</Link>
    </div>
  );
};

export default Login;
