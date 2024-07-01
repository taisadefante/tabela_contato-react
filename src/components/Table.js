import React from "react";
import Editar from "./img/editar.png";
import Excluir from "./img/excluir.png";

const Table = ({ data, deleteData, editData }) => {
  const formatPhoneNumber = (phone) => {
    // Remove non-numeric characters
    return phone.replace(/\D/g, "");
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Nascimento</th>
          <th>Empresa</th>
          <th>Cargo</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>
              <a
                href={`https://wa.me/${formatPhoneNumber(item.telefone)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.telefone}
              </a>
            </td>
            <td>{item.email}</td>
            <td>{item.nascimento}</td>
            <td>{item.empresa}</td>
            <td>{item.cargo}</td>
            <td>{item.endereco}</td>
            <td>
              <button onClick={() => editData(index)}>
                <img src={Editar} alt="Editar" />
              </button>
              <button onClick={() => deleteData(index)}>
                <img src={Excluir} alt="Excluir" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
