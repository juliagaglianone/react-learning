import React from 'react';
import './App.css';

export default function App() {
  // Dados simulados para as 30 atividades
  const atividades = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    numero: String(index + 1).padStart(2, '0'),
    titulo: `Atividade Prática ${index + 1}`,
    descricao: `Desenvolvimento e implementação do módulo ${index + 1} focado em componentes e boas práticas React.`,
    tecnologia: index % 2 === 0 ? 'React & CSS' : 'JavaScript & JSX',
  }));

  return (
    <div className="app-container">
      {/* Header */}
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
        {/* Seção Início / Evidências */}
        <section id="inicio">
          <h2>Visão Geral e Evidências</h2>

          {/* Cards Anteriores (3, 4, 5 e 6) podem ficar aqui */}

          {/* Card 7: Demonstrativo dos Estados Visuais dos Cartões */}
          <article className="card-evidencia">
            <h3>Card 7: Estados Visuais do Componente de Cartão</h3>
            <p>Demonstração dos componentes de cartão e seus estados de interação:</p>

            <div className="demonstracao-estados">
              {/* Estado Normal */}
              <div className="atividade-card demo-estado">
                <span className="estado-label">Estado: Normal</span>
                <div className="atividade-header">
                  <span className="atividade-numero">#01</span>
                  <span className="atividade-tag">React</span>
                </div>
                <h4 className="atividade-titulo">Exemplo Normal</h4>
                <p className="atividade-descricao">Apresentação padrão do cartão com contraste adequado.</p>
                <button className="atividade-btn" type="button">Acessar Entrega</button>
              </div>

              {/* Estado Hover Simulado */}
              <div className="atividade-card demo-estado state-hover">
                <span className="estado-label">Estado: Hover</span>
                <div className="atividade-header">
                  <span className="atividade-numero">#02</span>
                  <span className="atividade-tag">CSS</span>
                </div>
                <h4 className="atividade-titulo">Exemplo Hover</h4>
                <p className="atividade-descricao">Elevação suave na sombra e alteração de borda ao passar o mouse.</p>
                <button className="atividade-btn" type="button">Acessar Entrega</button>
              </div>

              {/* Estado Focus Simulado */}
              <div className="atividade-card demo-estado state-focus">
                <span className="estado-label">Estado: Focus (Teclado)</span>
                <div className="atividade-header">
                  <span className="atividade-numero">#03</span>
                  <span className="atividade-tag">JSX</span>
                </div>
                <h4 className="atividade-titulo">Exemplo Focus</h4>
                <p className="atividade-descricao">Contorno visível e destacado para navegação acessível via Tab.</p>
                <button className="atividade-btn" type="button" tabIndex={0}>Acessar Entrega</button>
              </div>
            </div>
          </article>
        </section>

        {/* Seção de Grid de Atividades (30 Itens) */}
        <section id="atividades">
          <h2>Lista de Atividades (30)</h2>
          <div className="grid-atividades">
            {atividades.map((item) => (
              <article key={item.id} className="atividade-card" tabIndex={0}>
                <div className="atividade-header">
                  <span className="atividade-numero">#{item.numero}</span>
                  <span className="atividade-tag">{item.tecnologia}</span>
                </div>
                <h3 className="atividade-titulo">{item.titulo}</h3>
                <p className="atividade-descricao">{item.descricao}</p>
                <a href={`#atividade-${item.id}`} className="atividade-btn">
                  Ver Detalhes
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}