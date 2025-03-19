import React, { useEffect, useState } from "react"
import axios from "axios"

const UserList = () => {
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/usuario");
    setUsuarios(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h4>Lista de Usuários</h4>
      <ul className="collection">
        {usuarios.map((user) => (
          <li key={user.id} className="collection-item">
            <strong>{user.nome}</strong> - {user.login} - {user.senha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;