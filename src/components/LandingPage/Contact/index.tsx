import React from 'react';
import './styles.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contato">
        <div className="container">
          <h2>Contato</h2>
          <div className="form-area">
            <form>
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="E-mail" required />
              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit">Enviar</button>
            </form>
            <address>
              Avenida Beira Rio, 680 – Graças – Recife-PE<br />
              CEP: 50.689-555
            </address>
          </div>
        </div>
      </section>
  );
};

export default Contact;
