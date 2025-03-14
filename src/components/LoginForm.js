import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/loginService";
import Button from "./Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(username, password);
    if (result.success) {
      navigate("/home");
    } else {
      setError(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre de usuario</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="d-flex justify-content-between">
        <Button type="submit" text="Ingresar" color="primary" />
        <Button type="button" text="Cancelar" color="danger" />
      </div>
    </form>
  );
};

export default LoginForm;
