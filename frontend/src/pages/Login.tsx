import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";
import useLogin from "../hooks/useLogin";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs.username, inputs.password);
    setInputs({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <p className="form-title">Login</p>
      <input
        className="form-input"
        type="text"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        placeholder="Username or Email"
      />
      <input
        className="form-input"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        placeholder="Password"
      />
      <a href="/signup">Don't have an account yet?</a>
      <button className="form-button" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
