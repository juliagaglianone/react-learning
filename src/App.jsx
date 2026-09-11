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

          {/* Card 5: Teste do Menu e Links */}
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

          {/* Card 7: Estados Visuais do Componente de Cartão */}
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

          {/* Card 8: Organização de Layout com Flexbox */}
          <article className="card-evidencia">
            <h3>Card 8: Organização com Flexbox</h3>
            <p>
              <strong>Problema Resolvido:</strong> O alinhamento vertical imperfeito de textos e imagens 
              no cabeçalho, além da necessidade de <code>margin</code> individual para separar itens de menu. 
              Com o Flexbox, usamos <code>align-items: center</code> para centralizar verticalmente e <code>gap</code> 
              para um espaçamento limpo e constante.
            </p>

            {/* Demonstração Comparativa de Alinhamento */}
            <div className="flex-demo-container">
              {/* Sem Flexbox */}
              <div className="flex-demo-box demo-sem-flex">
                <p>Sem Flexbox (display block padrão):</p>
                <div className="demo-items">
                  <span className="demo-badge">Item 1</span>
                  <span className="demo-badge">Item 2</span>
                  <span className="demo-badge">Item 3</span>
                </div>
              </div>

              {/* Com Flexbox */}
              <div className="flex-demo-box demo-com-flex">
                <p>Com Flexbox (justify-content: space-between e align-items: center):</p>
                <div className="demo-items">
                  <span className="demo-badge">Item 1</span>
                  <span className="demo-badge">Item 2</span>
                  <span className="demo-badge">Item 3</span>
                </div>
              </div>
            </div>
          </article>
        </section>
        
        {/* Card 9: Organização de Atividades com CSS Grid */}
      <article className="card-evidencia">
        <h3>Card 9: Grade Responsiva com CSS Grid</h3>
        <p>
          <strong>Regra Utilizada:</strong> <code>grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))</code>.
        </p>
        <ul>
          <li>
            <strong><code>auto-fill</code>:</strong> Preenche a linha com o máximo de colunas possível mantendo o tamanho mínimo.
          </li>
          <li>
            <strong><code>minmax(280px, 1fr)</code>:</strong> Garante que nenhum cartão fique menor que <code>280px</code> em telas pequenas e faz com que eles se expandam igualmente (<code>1fr</code>) para ocupar o espaço disponível em telas maiores.
          </li>
          <li>
            <strong>Prevenção de Overflow:</strong> Eliminou a necessidade de larguras fixas em <code>px</code>, evitando rolagem horizontal em dispositivos móveis.
          </li>
        </ul>
      </article>

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

        {/* Seção Sobre */}
        <section id="sobre">
          <h2>Sobre o Projeto</h2>
          <p>
            Projeto desenvolvido como avaliação individual com foco em React, 
            CSS moderno, Flexbox e acessibilidade.
          </p>
        </section>

        {/* Seção Contato */}
        <section id="contato">
          <h2>Contato</h2>
          <p>Canais de comunicação e redes do desenvolvedor.</p>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}