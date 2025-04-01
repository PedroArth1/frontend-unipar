import React, { useEffect, useState } from "react"
import axios from "axios"

const PersonList = () => {
  const [pessoas, setPessoas] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/pessoa");
    setPessoas(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h4>Lista de Pessoas</h4>
      <ul className="collection">
        {pessoas.map((person) => (
          <li key={person.id} className="collection-item">
            <strong>{person.nome}</strong> - {person.sobrenome} - {person.rg} - {person.cpf} - {person.fone} - {person.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;