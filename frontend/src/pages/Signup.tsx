import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { DayPicker } from "react-day-picker";

import "cally";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });
  const [date, setDate] = useState<Date | undefined>();
  const { loading, signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs);
    navigate("/");
    setInputs({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
    });
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <p className="form-title">Signup</p>
      <input
        className="form-input"
        type="text"
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        placeholder="Full name"
      />
      <input
        className="form-input"
        type="text"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="text"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Email"
      />
      <button
        popoverTarget="rdp-popover"
        className="form-input"
        style={{ anchorName: "--rdp" } as React.CSSProperties}
        type="button"
      >
        {date ? date.toLocaleDateString() : "Elige tu fecha de cumpleaños"}
      </button>
      <div
        popover="auto"
        id="rdp-popover"
        className="dropdown"
        style={{ positionAnchor: "--rdp" } as React.CSSProperties}
      >
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </div>
      <input
        className="form-input"
        type="password"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        placeholder="Password"
      />
      <input
        className="form-input"
        type="password"
        value={inputs.confirmPassword}
        onChange={(e) =>
          setInputs({ ...inputs, confirmPassword: e.target.value })
        }
        placeholder="Confirm password"
      />

      <a>
        Already have an account? <a href="/login">Login</a>
      </a>
      <button className="form-button" disabled={loading} type="submit">
        {loading ? "Loading..." : "Sign up"}
      </button>
    </form>
  );
};
export default Signup;
