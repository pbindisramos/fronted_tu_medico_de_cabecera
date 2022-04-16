import { useState, useEffect } from "react";

const Formulario = () => {
  return (
    <div>
      <h1 style={{ color: "purple" }}>Tu médico de cabecera</h1>
      <form style={{ width: "50vw", marginLeft: "25vw" }}>
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="text"
          placeholder="Nombre"
        />
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="text"
          placeholder="Rut"
        />
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="text"
          placeholder="Fecha de nacimiento"
        />
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="email"
          placeholder="Correo"
        />
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="password"
          placeholder="Password"
        />
        <input
          style={{ display: "block", marginBottom: "10px" }}
          type="password"
          placeholder="Repetir Password"
        />
        <button style={{ marginRight: "40px" }} type="submit">
          Registrase
        </button>
      </form>
    </div>
  );
};

export default Formulario;
