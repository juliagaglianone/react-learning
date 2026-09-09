import React from 'react'

function App() {
  const ferramentas = {
    node: 'v24.16.0',
    npm: '11.13.0',
    git: '2.54.0.windows.1',
    editor: 'VS Code'
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Portfólio de Atividades</h1>

      <section style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '400px', marginTop: '1rem' }}>
        <h2>1. Preparar o ambiente e criar o projeto</h2>
        <p><strong>Status:</strong> Ambiente de desenvolvimento pronto e verificado</p>
        <ul>
          <li><strong>Node.js:</strong> {ferramentas.node}</li>
          <li><strong>npm:</strong> {ferramentas.npm}</li>
          <li><strong>Git:</strong> {ferramentas.git}</li>
          <li><strong>Editor:</strong> {ferramentas.editor}</li>
        </ul>
      </section>
    </main>
  )
}

export default App