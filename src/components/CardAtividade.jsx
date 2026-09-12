import React from 'react';

const statusConfig = {
  Planejada: {
    classe: 'status-planejada',
    texto: 'Planejada'
  },

  'Em andamento': {
    classe: 'status-andamento',
    texto: 'Em andamento'
  },

  Concluída: {
    classe: 'status-concluida',
    texto: 'Concluída'
  }
};

export default function CardAtividade({
  numero,
  titulo,
  descricao,
  tecnologia,
  status,
  link
}) {
  const statusInfo = statusConfig[status] || statusConfig.Planejada;

  return (
    <article
      className="atividade-card"
      tabIndex={0}
    >
      <div className="atividade-header">
        <span className="atividade-numero">
          #{numero}
        </span>

        <span className="atividade-tag">
          {tecnologia}
        </span>
      </div>

      <h3 className="atividade-titulo">
        {titulo}
      </h3>

      <p className="atividade-descricao">
        {descricao}
      </p>

      <span className={`atividade-status ${statusInfo.classe}`}>
        {statusInfo.texto}
      </span>

      <a
        href={link}
        className="atividade-btn"
      >
        Ver Detalhes
      </a>
    </article>
  );
}