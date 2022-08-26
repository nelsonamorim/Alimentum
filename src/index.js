import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import MyRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MyRoutes />
  </React.StrictMode>
);<>
<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="style.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@700&family=Poppins:wght@700&display=swap"
  rel="stylesheet"
/>
<title>Login</title>
<header className="topo">
  <span>
    <img
      src="https://i.imgur.com/QreamAa.png"
      alt="Logo Alimentum"
      className="logo"
    />
  </span>
  <h3>Alimentum</h3>
  <span>
    <img
      src="https://i.imgur.com/mZ1kPlF.png"
      alt="Dúvidas"
      className="duvidas"
    />
  </span>
  <p className="">Dúvidas? Fale conosco</p>
</header>
<div className="login">
  <h1>
    Bem-vindo a <br /> Alimentum!
  </h1>
  <form action="" className="formulario">
    <label htmlFor="Email">Email</label>
    <input type="email" name="email" id="email" />
    <label htmlFor="Password">Senha</label>
    <input type="password" name="password" id="password" />
    <input type="checkbox" className="checkbox" />
    <label className="conectado">Manter conectado</label>
    <button>Acessar</button>
  </form>
</div>
<article className="illustra">
  <img
    src="https://i.imgur.com/y8cKQd6.jpeg"
    alt="hortifrut com vegetais e frutas"
  />
</article>
</>
