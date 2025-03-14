import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <p className="form-title">Enter email to recover password</p>
      <input
        className="form-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ForgotPassword;
