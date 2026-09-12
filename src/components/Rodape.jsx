import React from 'react';

export default function Rodape({ nome }) {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>
        &copy; {anoAtual} - {nome}. Todos os direitos reservados.
      </p>

      <a href="#inicio" className="back-to-top">
        Voltar ao início
      </a>
    </footer>
  );
}