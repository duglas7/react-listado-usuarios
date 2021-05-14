import React, { useEffect, useState } from "react";
import axios from "axios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [search, setSearch] = useState("");

  const obtenerUsuarios = async () => {
    const resultado = await axios.get("https://randomuser.me/api/?results=15");
    const users = await resultado.data.results;
    setUsuarios(users);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const eliminarRegistro = (uuid) => {
    const nuevosRegistros = usuarios.filter(
      (usuario) => usuario.login.uuid !== uuid
    );
    setUsuarios(nuevosRegistros);
  };

  return (
    <div>
      <form
        className="form-input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      >
        <input type="text" className="input-search" placeholder=" Search...." />
      </form>
      {console.log(usuarios)}
      <div className="grid">
        {!!usuarios &&
          usuarios
            .filter((valor) => {
              if (search === "") {
                return valor;
              } else if (
                valor.name.first.toLowerCase().includes(search.toLowerCase()) ||
                valor.name.last.toLowerCase().includes(search.toLowerCase())
              ) {
                return valor;
              }
            })
            .map((valor) => (
              <div key={valor.login.uuid} className="grid-item">
                <div className="card">
                  <button
                    onClick={() => eliminarRegistro(valor.login.uuid)}
                    className="btn-delete"
                  >
                    X
                  </button>
                  <img src={valor.picture.large} alt="" className="card-img" />
                  <div className="card-content">
                    <h1 className="card-header">
                      <span>{valor.name.title}</span> {valor.name.first} {""}
                      {valor.name.last}
                    </h1>
                    <p className="card-text">
                      <span>
                        <b>Email: </b>
                        {valor.email}
                      </span>
                      <br />
                      <span>
                        <b>Country: </b>
                        {valor.location.country}
                      </span>
                      <br />
                      <span>
                        <b>City: </b>
                        {valor.location.city}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Usuarios;
