import React from "react";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-center mb-3">Adopta un Robot con Robot Lovers!</h2>
      
      <div className="text-center">
        <img src="/assets/loginImage.png" alt="Robots" className="img-fluid" style={{ maxWidth: "600px" }} />
      </div>

      <div className="card mt-4" style={{ width: "400px" }}>
        <div className="card-body">
          <h4 className="text-center">Inicio de sesión</h4>
          <LoginForm />
        </div>
      </div>
      <footer className="text-center mt-3">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default LoginPage;
