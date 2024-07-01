import React, { useState, useEffect } from "react";
import Disquete from "./img/disquete.png";

const Form = ({ addData, data }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    nascimento: "",
    empresa: "",
    cargo: "",
    endereco: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      nascimento: "",
      empresa: "",
      cargo: "",
      endereco: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="nascimento"
        value={formData.nascimento}
        onChange={handleChange}
        placeholder="Data de Nascimento"
        required
      />
      <input
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
        placeholder="Empresa"
        required
      />
      <input
        name="cargo"
        value={formData.cargo}
        onChange={handleChange}
        placeholder="Cargo"
        required
      />
      <input
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        placeholder="Endereço"
        required
      />
      <button type="submit">
        <img src={Disquete} />{" "}
      </button>
    </form>
  );
};

export default Form;
