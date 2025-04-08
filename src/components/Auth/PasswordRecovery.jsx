import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default function PasswordRecovery() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email para recuperación:', email);
    alert('Se ha enviado un enlace de recuperación a tu email.');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Recuperar Contraseña</h2>
        <div className="form-group">
          <label htmlFor="recovery-email">Email</label>
          <input
            type="email"
            id="recovery-email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Enviar enlace</button>
        <div className="auth-links">
          <Link to="/login">Volver al inicio de sesión</Link>
        </div>
      </form>
    </div>
  );
}
