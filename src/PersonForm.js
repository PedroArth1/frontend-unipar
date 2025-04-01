import React, { useEffect, useState } from "react";
import axios from "axios";
import M from "materialize-css";


const PersonForm = ({ onPersonAdded }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [fone, setFone] = useState("");
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    M.updateTextFields(); // Atualiza os labels flutuantes do Materialize
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/pessoa", { nome, sobrenome, cpf, rg, fone, endereco });
      setNome("");
      setSobrenome("");
      setCpf("");
      setRg("");
      setFone("");
      setEndereco("");
      onPersonAdded(); // Atualiza a lista após cadastrar
      M.toast({ html: "Pessoa cadastrado com sucesso!", classes: "green" });
    } catch (error) {
      console.error("Erro ao cadastrar pessoa:", error);
      M.toast({ html: "Erro ao cadastrar pessoa", classes: "red" });
    }
  };

  return (
    <div className="container">
      <h4>Cadastrar Pessoa</h4>
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
            id="SobreNome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
          <label htmlFor="sobrenome">sobrenome</label>
        </div>
        <div className="input-field">
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <label htmlFor="cpf">cpf</label>
        </div>
        <div className="input-field">
          <input
            id="rg"
            type="text"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
            required
          />
          <label htmlFor="rg">rg</label>
        </div>
        <div className="input-field">
          <input
            id="fone"
            type="text"
            value={fone}
            onChange={(e) => setFone(e.target.value)}
            required
          />
          <label htmlFor="fone">fone</label>
        </div>
        <div className="input-field">
          <input
            id="endereco"
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
          <label htmlFor="endereco">endereco</label>
        </div>
       
        <button className="btn waves-effect waves-light" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default PersonForm;