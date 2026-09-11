import React from 'react';
import './App.css';

export default function App() {
  const atividades = Array.from({ length: 30 }, (_, i) => `Atividade ${i + 1}`);

  return (
    <div className="app-container">
      {/* Cabeçalho e Menu de Navegação */}
      <header className="header-container">
        <div className="profile-info">
          <img 
            src="https://via.placeholder.com/120" 
            alt="Foto de perfil do desenvolvedor" 
            className="avatar"
          />
          <div>
            <h1>Seu Nome Completo</h1>
            <p className="subtitle">Curso: Desenvolvimento Web | Turma 2026</p>
            <p className="description">
              Portfólio para mapeamento do progresso em React e boas práticas web.
            </p>
            <a href="#atividades" className="btn-primary">
              Ver Atividades
            </a>
          </div>
        </div>

        {/* Menu de Navegação por Âncoras */}
        <nav className="navbar">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#atividades">Atividades</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main>
        {/* Seção Início */}
        <section id="inicio">
          <h2>Visão Geral do Projeto</h2>

          {/* Card 3 (Estrutura Semântica) */}
          <article className="card-evidencia">
            <h3>Card 3: Estrutura Semântica</h3>
            <p>Elementos semânticos empregados nesta aplicação.</p>
          </article>

          {/* Card 4 (Identidade Visual) */}
          <article className="card-evidencia">
            <h3>Card 4: Decisões de Identidade Visual</h3>
            <p>Escolhas aplicadas para apresentação do autor e marca pessoal.</p>
          </article>

          {/* Card 5: Resultado do Teste do Menu e Links */}
          <article className="card-evidencia">
            <h3>Card 5: Teste de Navegação e Âncoras</h3>
            <p>Verificação do funcionamento do menu de navegação:</p>
            <ul>
              <li><strong>Início (<code>#inicio</code>):</strong> Rola suavemente para a visão geral e cards.</li>
              <li><strong>Atividades (<code>#atividades</code>):</strong> Direciona para a lista com 30 itens.</li>
              <li><strong>Sobre (<code>#sobre</code>):</strong> Navega para as informações sobre o projeto e tecnologias.</li>
              <li><strong>Contato (<code>#contato</code>):</strong> Direciona para a área de canais de comunicação.</li>
              <li><strong>Acessibilidade/Foco:</strong> Foco visual ativo via teclado (tecla <code>Tab</code>) destacado nos links.</li>
            </ul>
          </article>
        </section>

        {/* Seção Atividades */}
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

        {/* Seção Sobre */}
        <section id="sobre">
          <h2>Sobre o Projeto</h2>
          <p>
            Este projeto foi desenvolvido como avaliação individual na disciplina do Professor Celso Barreto,
            utilizando React, Vite, CSS moderno e Git/Vercel.
          </p>
        </section>

        {/* Seção Contato */}
        <section id="contato">
          <h2>Contato</h2>
          <p>Entre em contato ou acesse minhas redes profissionais:</p>
          <ul>
            <li>Email: aluno@exemplo.com</li>
            <li>GitHub: github.com/seu-usuario</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}