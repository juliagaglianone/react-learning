import React from 'react';

export default function CardAtividade({
  numero,
  titulo,
  descricao,
  tecnologia,
  link
}) {
  return (
    <div className="card-atividade">
      <span className="card-numero">{numero}</span>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <span className="card-tecnologia">{tecnologia}</span>

      <a href={link} target="_blank" rel="noopener noreferrer">
        Acessar atividade
      </a>
    </div>
  );
}