import React, { useEffect, useState } from "react";
import axios from "axios";
import M from "materialize-css";


const UserForm = ({ onUserAdded }) => {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    M.updateTextFields(); // Atualiza os labels flutuantes do Materialize
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/usuario", { nome, login, senha });
      setNome("");
      setLogin("");
      setSenha("");
      onUserAdded(); // Atualiza a lista após cadastrar
      M.toast({ html: "Usuário cadastrado com sucesso!", classes: "green" });
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      M.toast({ html: "Erro ao cadastrar usuário", classes: "red" });
    }
  };

  return (
    <div className="container">
      <h4>Cadastrar Usuário</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label htmlFor="nome">Nome</label>
        </div>
        <div className="input-field">
          <input
            id="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <label htmlFor="login">Login</label>
        </div>
        <div className="input-field">
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <label htmlFor="senha">Senha</label>
        </div>
        <button className="btn waves-effect waves-light" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default UserForm;