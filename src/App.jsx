import React from 'react';
import './App.css'; // Mantenha ou adicione seus estilos aqui

export default function App() {
  const atividades = Array.from({ length: 30 }, (_, i) => `Atividade ${i + 1}`);

  return (
    <div className="app-container">
      {/* 1. Cabeçalho com Identidade */}
      <header className="header-container">
        <div className="profile-info">
          <img 
            src="https://via.placeholder.com/120" 
            alt="Foto de perfil de [Seu Nome], desenvolvedor do portfólio" 
            className="avatar"
          />
          <div>
            <h1>[Seu Nome Completo]</h1>
            <p className="subtitle">Curso: Desenvolvimento Web | Turma 2026</p>
            <p className="description">
              Portfólio desenvolvido para mapear o progresso em React, 
              exibindo as 30 atividades práticas e boas práticas de acessibilidade e semântica.
            </p>
            {/* Botão direcionando à seção de atividades */}
            <a href="#atividades" className="btn-primary">
              Ver Atividades
            </a>
          </div>
        </div>

        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atividades">Atividades</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. Conteúdo Principal */}
      <main>
        <section id="inicio">
          <h2>Visão Geral do Projeto</h2>

          {/* Card 3 (Mantenha o card da etapa anterior) */}
          <article className="card-evidencia">
            <h3>Card 3: Estrutura Semântica</h3>
            <p>Elementos semânticos empregados nesta aplicação:</p>
            <ul>
              <li><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>.</li>
            </ul>
          </article>

          {/* Card 4: Escolhas de Identidade */}
          <article className="card-evidencia">
            <h3>Card 4: Decisões de Identidade Visual</h3>
            <p>Escolhas aplicadas para apresentação do autor e marca pessoal:</p>
            <ul>
              <li><strong>Nome e Turma:</strong> Identificação clara no topo do cabeçalho.</li>
              <li><strong>Avatar:</strong> Imagem de perfil acompanhada de atributo <code>alt</code> descritivo para acessibilidade.</li>
              <li><strong>Propósito:</strong> Resumo direto explicando o objetivo do portfólio.</li>
              <li><strong>Navegação Guiada:</strong> Botão de call-to-action levando diretamente para a lista de atividades.</li>
            </ul>
          </article>
        </section>

        {/* Seção das 30 Atividades */}
        <section id="atividades">
          <h2>Lista de Atividades (30)</h2>
          <ul className="lista-atividades">
            {atividades.map((atividade, index) => (
              <li key={index} className="item-atividade">
                {atividade}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}