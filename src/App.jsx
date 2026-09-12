import React from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import atividades from './data/atividades';
import profileJulia from './public/profile-julia.jpg';
import CardAtividade from './components/CardAtividade';
export default function App() {
  
  return (
    <div className="app-container">

      {/* Componente de Cabeçalho */}
      <Cabecalho
        nome="Júlia Gaglianone de Andrade"
        curso="Curso: Desenvolvimento Web | Turma 2026"
        descricao="Portfólio para mapeamento do progresso em React e boas práticas web."
        foto={profileJulia}
      />

      {/* Conteúdo Principal */}
      <main>

        {/* Seção Início / Evidências */}
        <section id="inicio">
          <h2>Visão Geral e Evidências</h2>

          {/* Card 3 - Estrutura Semântica */}
          <article className="card-evidencia">
            <h3>Card 3: Estrutura Semântica</h3>
            <p>
              Elementos semânticos empregados nesta aplicação.
            </p>
          </article>

          {/* Card 4 - Identidade Visual */}
          <article className="card-evidencia">
            <h3>Card 4: Decisões de Identidade Visual</h3>
            <p>
              Escolhas aplicadas para apresentação do autor e marca pessoal.
            </p>
          </article>

          {/* Card 5 - Teste do Menu e Links */}
          <article className="card-evidencia">
            <h3>Card 5: Teste de Navegação e Âncoras</h3>

            <p>
              Verificação do funcionamento do menu de navegação:
            </p>

            <ul>
              <li>
                <strong>Início (<code>#inicio</code>):</strong>{' '}
                Rola suavemente para a visão geral e cards.
              </li>

              <li>
                <strong>Atividades (<code>#atividades</code>):</strong>{' '}
                Direciona para a lista com 30 itens.
              </li>

              <li>
                <strong>Sobre (<code>#sobre</code>):</strong>{' '}
                Navega para as informações sobre o projeto e tecnologias.
              </li>

              <li>
                <strong>Contato (<code>#contato</code>):</strong>{' '}
                Direciona para a área de canais de comunicação.
              </li>

              <li>
                <strong>Acessibilidade/Foco:</strong>{' '}
                Foco visual ativo via teclado (tecla <code>Tab</code>)
                destacado nos links.
              </li>
            </ul>
          </article>

          {/* Card 7 - Estados Visuais do Componente de Cartão */}
          <article className="card-evidencia">
            <h3>Card 7: Estados Visuais do Componente de Cartão</h3>

            <p>
              Demonstração dos componentes de cartão e seus estados de
              interação:
            </p>

            <div className="demonstracao-estados">

              {/* Estado Normal */}
              <div className="atividade-card demo-estado">
                <span className="estado-label">
                  Estado: Normal
                </span>

                <div className="atividade-header">
                  <span className="atividade-numero">
                    #01
                  </span>

                  <span className="atividade-tag">
                    React
                  </span>
                </div>

                <h4 className="atividade-titulo">
                  Exemplo Normal
                </h4>

                <p className="atividade-descricao">
                  Apresentação padrão do cartão com contraste adequado.
                </p>

                <button
                  className="atividade-btn"
                  type="button"
                >
                  Acessar Entrega
                </button>
              </div>

              {/* Estado Hover Simulado */}
              <div className="atividade-card demo-estado state-hover">
                <span className="estado-label">
                  Estado: Hover
                </span>

                <div className="atividade-header">
                  <span className="atividade-numero">
                    #02
                  </span>

                  <span className="atividade-tag">
                    CSS
                  </span>
                </div>

                <h4 className="atividade-titulo">
                  Exemplo Hover
                </h4>

                <p className="atividade-descricao">
                  Elevação suave na sombra e alteração de borda ao passar
                  o mouse.
                </p>

                <button
                  className="atividade-btn"
                  type="button"
                >
                  Acessar Entrega
                </button>
              </div>

              {/* Estado Focus Simulado */}
              <div className="atividade-card demo-estado state-focus">
                <span className="estado-label">
                  Estado: Focus (Teclado)
                </span>

                <div className="atividade-header">
                  <span className="atividade-numero">
                    #03
                  </span>

                  <span className="atividade-tag">
                    JSX
                  </span>
                </div>

                <h4 className="atividade-titulo">
                  Exemplo Focus
                </h4>

                <p className="atividade-descricao">
                  Contorno visível e destacado para navegação acessível
                  via Tab.
                </p>

                <button
                  className="atividade-btn"
                  type="button"
                  tabIndex={0}
                >
                  Acessar Entrega
                </button>
              </div>

            </div>
          </article>

          {/* Card 8 - Organização de Layout com Flexbox */}
          <article className="card-evidencia">
            <h3>Card 8: Organização com Flexbox</h3>

            <p>
              <strong>Problema Resolvido:</strong> O alinhamento vertical
              imperfeito de textos e imagens no cabeçalho, além da necessidade
              de <code>margin</code> individual para separar itens de menu.
              Com o Flexbox, usamos <code>align-items: center</code> para
              centralizar verticalmente e <code>gap</code> para um espaçamento
              limpo e constante.
            </p>

            {/* Demonstração Comparativa de Alinhamento */}
            <div className="flex-demo-container">

              {/* Sem Flexbox */}
              <div className="flex-demo-box demo-sem-flex">
                <p>
                  Sem Flexbox (display block padrão):
                </p>

                <div className="demo-items">
                  <span className="demo-badge">
                    Item 1
                  </span>

                  <span className="demo-badge">
                    Item 2
                  </span>

                  <span className="demo-badge">
                    Item 3
                  </span>
                </div>
              </div>

              {/* Com Flexbox */}
              <div className="flex-demo-box demo-com-flex">
                <p>
                  Com Flexbox (justify-content: space-between e
                  align-items: center):
                </p>

                <div className="demo-items">
                  <span className="demo-badge">
                    Item 1
                  </span>

                  <span className="demo-badge">
                    Item 2
                  </span>

                  <span className="demo-badge">
                    Item 3
                  </span>
                </div>
              </div>

            </div>
          </article>

        </section>

        {/* Card 9 - Organização de Atividades com CSS Grid */}
        <article className="card-evidencia">
          <h3>Card 9: Grade Responsiva com CSS Grid</h3>

          <p>
            <strong>Regra Utilizada:</strong>{' '}
            <code>
              grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
            </code>.
          </p>

          <ul>
            <li>
              <strong>
                <code>auto-fill</code>:
              </strong>{' '}
              Preenche a linha com o máximo de colunas possível mantendo o
              tamanho mínimo.
            </li>

            <li>
              <strong>
                <code>minmax(280px, 1fr)</code>:
              </strong>{' '}
              Garante que nenhum cartão fique menor que <code>280px</code>{' '}
              em telas pequenas e faz com que eles se expandam igualmente
              (<code>1fr</code>) para ocupar o espaço disponível em telas
              maiores.
            </li>

            <li>
              <strong>Prevenção de Overflow:</strong>{' '}
              Eliminou a necessidade de larguras fixas em <code>px</code>,
              evitando rolagem horizontal em dispositivos móveis.
            </li>
          </ul>
        </article>

        {/* Card 10 - Responsividade e Testes de Tela */}
        <article className="card-evidencia">
          <h3>Card 10: Responsividade e Pontos de Ajuste</h3>

          <p>
            Resultados dos testes de layout e correções efetuadas para
            múltiplos dispositivos:
          </p>

          <ul>
            <li>
              <strong>Mobile (360 px):</strong>
              <br />

              <em>Problema:</em> Quebra do menu e estouro do avatar no topo.
              <br />

              <em>Solução:</em> Mudança da direção do Flexbox para coluna
              (<code>flex-direction: column</code>), redução da tipografia
              e do avatar para 80px, e centralização dos elementos.
            </li>

            <li>
              <strong>Tablet (768 px):</strong>
              <br />

              <em>Problema:</em> Espaçamento lateral excessivo e
              desalinhamento entre perfil e links do menu.
              <br />

              <em>Solução:</em> Realinhamento da navegação em linha e
              adequação dos cartões com{' '}
              <code>minmax(240px, 1fr)</code>.
            </li>

            <li>
              <strong>Desktop (1440 px):</strong>
              <br />

              <em>Problema:</em> Conteúdo muito esticado e disperso nas
              extremidades.
              <br />

              <em>Solução:</em> Aplicação de <code>max-width: 1280px</code>{' '}
              e margens automáticas para centralizar o contêiner principal.
            </li>
          </ul>
        </article>
        {/* Card 11 - Componente Cabecalho */}
        <article className="card-evidencia">
          <h3>Card 11: Componente Cabecalho</h3>

          <p>
            <strong>Arquivo:</strong>{' '}
            <code>components/Cabecalho.jsx</code>
          </p>

          <p>
            <strong>Responsabilidade:</strong>{' '}
            O componente é responsável por organizar e exibir o cabeçalho da
            aplicação, incluindo a foto de perfil, nome, curso, descrição,
            botão de acesso às atividades e menu de navegação.
          </p>

          <p>
            <strong>Props:</strong>{' '}
            Recebe <code>nome</code>, <code>curso</code>,{' '}
            <code>descricao</code> e <code>foto</code>, permitindo reutilizar
            o componente com diferentes informações.
          </p>

          <p>
            <strong>Local de uso:</strong>{' '}
            O componente é importado e utilizado em <code>App.jsx</code>,
            substituindo a marcação direta do cabeçalho.
          </p>
        </article>

        {/* Card 12 - Componente Rodape */}
      <article className="card-evidencia">
        <h3>Card 12: Componente Rodape</h3>

        <p>
          <strong>Arquivo:</strong>{' '}
          <code>components/Rodape.jsx</code>
        </p>

        <p>
          <strong>Responsabilidade:</strong>{' '}
          Exibir o nome do autor, o ano atual e um link para retornar ao
          início da página.
        </p>

        <p>
          <strong>Reutilização:</strong>{' '}
          O nome do autor é recebido por meio da prop <code>nome</code>,
          enquanto o ano é calculado diretamente no componente.
        </p>

        <p>
          <strong>Local de uso:</strong>{' '}
          O componente é importado e utilizado em <code>App.jsx</code>,
          substituindo a marcação direta do rodapé.
        </p>

        <p>
          <strong>Funcionalidade:</strong>{' '}
          O link <code>Voltar ao início</code> utiliza a âncora{' '}
          <code>#inicio</code> para retornar à seção inicial da página.
        </p>
      </article>
      {/* Card 13 - Componente CardAtividade */}
    <article className="card-evidencia">
      <h3>Card 13: Componente CardAtividade</h3>

      <p>
        <strong>Arquivo:</strong>{' '}
        <code>components/CardAtividade.jsx</code>
      </p>

      <p>
        <strong>Objetivo:</strong>{' '}
        Transformar os cartões de atividades em um componente reutilizável,
        evitando a repetição da estrutura dos cartões no <code>App.jsx</code>.
      </p>

      <p>
        <strong>Props recebidas:</strong>{' '}
        O componente recebe as props <code>numero</code>, <code>titulo</code>,
        <code>descricao</code>, <code>tecnologia</code> e <code>link</code>.
      </p>

      <p>
        <strong>Reutilização:</strong>{' '}
        Os 30 cartões da seção de atividades são renderizados utilizando o
        mesmo componente <code>CardAtividade</code>, com diferentes valores
        enviados por meio das props.
      </p>
    </article>

    {/* Card 14 - Modelagem dos dados das atividades */}
    <article className="card-evidencia">
      <h3>Card 14: Modelagem dos Dados das Atividades</h3>

      <p>
        Os dados das atividades foram separados da estrutura visual da
        aplicação e armazenados no arquivo{' '}
        <code>data/atividades.js</code>.
      </p>

      <p>
        Cada objeto possui as propriedades <code>id</code>,{' '}
        <code>numero</code>, <code>titulo</code>, <code>descricao</code>,{' '}
        <code>tecnologia</code>, <code>status</code> e <code>link</code>.
      </p>
    </article>

    {/* Card 15 - Renderização da lista com map */}
    <article className="card-evidencia">
      <h3>Card 15: Renderização da Lista com map</h3>

      <p>
        <strong>Array:</strong>{' '}
        O arquivo <code>data/atividades.js</code> contém um array de objetos
        que armazena os dados das atividades.
      </p>

      <p>
        <strong>map:</strong>{' '}
        O método <code>map()</code> percorre cada objeto do array e gera um
        componente <code>CardAtividade</code> para cada atividade.
      </p>

      <p>
        <strong>Key:</strong>{' '}
        A propriedade <code>key</code> recebe o valor de <code>item.id</code>,
        que é único para cada atividade. Isso permite que o React identifique
        cada elemento da lista de forma estável.
      </p>

      <p>
        <strong>Numeração:</strong>{' '}
        As atividades são numeradas de <code>01</code> a <code>30</code>,
        conforme os dados definidos no array.
      </p>
    </article>

        {/* Seção de Grid de Atividades */}
        <section id="atividades">
          <h2>Lista de Atividades (30)</h2>

          <div className="grid-atividades">
            {atividades.map((item) => (
              <CardAtividade
                key={item.id}
                numero={item.numero}
                titulo={item.titulo}
                descricao={item.descricao}
                tecnologia={item.tecnologia}
                link={`#atividade-${item.id}`}
              />
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
        <article className="card-evidencia">
          <h3>Card 15: Renderização da Lista com map</h3>

          <p>
            <strong>Array:</strong>{' '}
            O arquivo <code>data/atividades.js</code> contém um array de objetos
            que armazena os dados das atividades.
          </p>

          <p>
            <strong>map:</strong>{' '}
            O método <code>map()</code> percorre cada objeto do array e gera um
            componente <code>CardAtividade</code> para cada atividade.
          </p>

          <p>
            <strong>Key:</strong>{' '}
            A propriedade <code>key</code> recebe o valor de <code>item.id</code>,
            que é único para cada atividade. Isso permite que o React identifique
            cada elemento da lista de forma estável.
          </p>

          <p>
            <strong>Numeração:</strong>{' '}
            As atividades são numeradas de <code>01</code> a <code>30</code>,
            conforme os dados definidos no array.
          </p>
        </article>

        {/* Seção Contato */}
        <section id="contato">
          <h2>Contato</h2>

          <p>
            Canais de comunicação e redes do desenvolvedor.
          </p>
        </section>

      </main>

      <Rodape nome="Júlia Gaglianone de Andrade" />

    </div>
  );
}