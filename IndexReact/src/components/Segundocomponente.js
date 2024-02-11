import React from 'react';
import '../../src/App.css';

const Segundocomponente = () => {  
    return (
    <div>
      <div className="slider-container"></div>
      <div className="slider position"></div>
      <section className="widget widget_blog_subscription">
        <form action="#" method="post" acceptCharset="utf-8" id="subscribe-blog">
          <p>Suscríbete para recibir ofertas.</p>
          <p>
            <input type="text" name="email" style={{ width: '95%', padding: '1px 2px' }} placeholder="escribe tu email" id="subscribe-field" />
          </p>
          <p>
            <input type="submit" value="¡Sígueme!" />
          </p>
        </form>
      </section>
    </div>
  );
};

export default Segundocomponente;