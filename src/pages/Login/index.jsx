import bannerLogin from '../../assets/login/banner-hortifruti-login.png';
import logoLogin from '../../assets/login/logo-alimentum-login.png';
import iconDuvidasLogin from '../../assets/login/icon-duvidas-login.png';

import './style.css';

export default function Login() {
  return(
    <div className="container-login">
      <header className="topo-login">
        <span>
          <img
            className="logo-login"
            src={logoLogin}
            alt="Logo Alimentum"
          />
        </span>
        <span className='duvidas-login'>
          <img
            className="icon-duvidas-login"
            src={iconDuvidasLogin}
            alt="duvidas"
          />
          <p className="text-duvidas">Dúvidas? Fale conosco</p>
        </span>        
      </header>

      <div className="menu-login">
        <div className='menu-form-login'>
          <h2 className='title-form-login'>
            Bem-vindo a <br /> Alimentum!
          </h2>
          <form action="" className="formulario-menu-login">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="Password">Senha</label>
            <input type="password" name="password" id="password" />
            <input type="checkbox" className="checkbox" />
            <label className="conectado">Manter conectado</label>
            <button>Acessar</button>
          </form>
        </div>
        <div className="illustra">
          <img
            className="banner-login"
            src={bannerLogin}
            alt="hortifrut com vegetais e frutas"
          />
        </div>
      </div>      
    </div>
  )
}