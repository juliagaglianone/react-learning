import React from 'react';

export default function Cabecalho({
  nome,
  curso,
  descricao,
  foto
}) {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#atividades">Atividades</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <header className="header-container">
        <div className="profile-info">
          <img
            src={foto}
            alt="Foto de perfil do desenvolvedor"
            className="avatar"
          />

          <div>
            <h1>{nome}</h1>

            <p className="subtitle">
              {curso}
            </p>

            <p className="description">
              {descricao}
            </p>

            <a href="#atividades" className="btn-primary">
              Ver Atividades
            </a>
          </div>
        </div>
      </header>
    </>
  );
}