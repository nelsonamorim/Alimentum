import bannerLogin from '../../assets/login/banner-hortifruti-login.png';
import logoLogin from '../../assets/login/logo-alimentum-login.png';
import iconDuvidasLogin from '../../assets/login/icon-duvidas-login.png';
import Checkbox from '../../components/Checkbox';

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
            <input type="email" className='input-form-login-email' name="email" id="email" />
            <label htmlFor="Password">Senha</label>
            <input type="password" className='input-form-login-password' name="password" id="password" />
            <Checkbox className="checkbox-form-login" />
            <label className="label-conectado">Manter conectado</label>
            <button className='button-form-login'>Acessar</button>
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