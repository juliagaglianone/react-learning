import React from 'react';

export default function Home() {

  const atividades = Array.from({ length: 30 }, (_, i) => `Atividade ${i + 1}`);

  return (
    <div className="app-container">
      {/* 1. Header com navegação */}
      <header>
        <h1>Painel de Atividades</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atividades">Atividades</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. Conteúdo principal */}
      <main>
        {/* Seção 1: Apresentação e Evidência */}
        <section id="inicio">
          <h2>Visão Geral do Projeto</h2>
          
          {/* Card 3: Evidência dos elementos semânticos empregados */}
          <article className="card-evidencia">
            <h3>Card 3: Estrutura Semântica</h3>
            <p>Elementos semânticos empregados nesta aplicação:</p>
            <ul>
              <li><code>&lt;header&gt;</code>: Cabeçalho principal com h1 e menu.</li>
              <li><code>&lt;nav&gt;</code>: Menu de navegação da aplicação.</li>
              <li><code>&lt;main&gt;</code>: Conteúdo principal da página.</li>
              <li><code>&lt;section&gt;</code>: Divisão temática dos blocos de conteúdo.</li>
              <li><code>&lt;article&gt;</code>: Bloco autocontido (cards).</li>
              <li><code>&lt;footer&gt;</code>: Rodapé com direitos e informações finais.</li>
            </ul>
          </article>
        </section>

        {/* Seção 2: Área reservada para a lista das 30 atividades */}
        <section id="atividades">
          <h2>Lista de Atividades (30)</h2>
          <p>Área reservada para a listagem das atividades:</p>
          
          <ul className="lista-atividades">
            {atividades.map((atividade, index) => (
              <li key={index} className="item-atividade">
                {atividade}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* 3. Rodapé */}
      <footer>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}