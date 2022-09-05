import './style.scss';

import man from '../../assets/home/man.svg'
import check from '../../assets/home/check.png'
import bullet from '../../assets/home/bullet.svg';
import bullet2 from '../../assets/home/bullet2.svg';
import bullet3 from '../../assets/home/bullet-3.svg';
import coracao from '../../assets/home/coracao.png';
import arrowUp from '../../assets/home/arrow-up.png';
import imgPage from '../../assets/home/imgPage.png';
import selo from '../../assets/home/selo.png';
import logoPage from '../../assets/home/logoPage.png';
import equipe from '../../assets/home/Fotos-Equipe.png';
import elipse from '../../assets/home/elipse.png';
import bolinhas from '../../assets/home/bolinhas.png';
import rectangleCadastro from '../../assets/home/rectangle-cadastro.png';
import rectangleHome from '../../assets/home/rectangle-homepage.png';
import rectangleDashboard from '../../assets/home/rectangle-dashboard.png';
import rectangleCatalogo from '../../assets/home/rectangle-catalogo.png';
import line1 from '../../assets/home/line-1.png';
import line2 from '../../assets/home/line-2.png';
import {Link, useNavigate} from 'react-router-dom';

function Home(){
const navigate = useNavigate();

const toFormularioMercado = () => {
navigate ('/formulario-mercado');
}

const toLogin = () => {
navigate ('/login');
}

return(
<div className="container-home">

  <header className="header-home">
    <a href="#" className="link-default header__logo">
      <img className='header-logo__img-home' src={logoPage} alt="logo" />
    </a>
    <nav className="header__menu">
      <a className="link-default menu__item menu__item-active" href="#">
        Quem somos
      </a>
      <a className="link-default menu__item" href="#">
        Benefícios
      </a>
      <a className="link-default menu__item" href="#">
        Contato
      </a>
      <button className="menu__item btn-signin" onClick={toLogin}>Login</button>
    </nav>
  </header>

  <main className='main-home'>
    <section className="s-hero">
      <div className="container">
        <div className="wrapper">
          <div className="content-text">
            <p className="description"> Conectando empresas com ONG's </p>
            <h1 className="title-content">Queremos colaborar com zero desperdício </h1>
            <p className="subtitle">
              {" "}
              Através da nossa plataforma, conectamos Produtos FIFO de Indústrias
              Alimentícias com o Ong's que poderão usá-los como matéria-prima em
              sua produção.
            </p>
          </div>
          <picture className="image-area">
            <img className='img-home' src={imgPage} alt="Imagem-Frutas" />
          </picture>
        </div>
        <div className="modes">
          <div className="modes-item">
            <img className="icon-heart1" src={coracao}alt="Coração com uma mão" />
            <h3 className="item-title">Sou empresa </h3>
            <p className="item-description"> Quero ser parceiro! </p>
            <button className="btn-registration" onClick={toFormularioMercado}>Cadastre-se!</button>
            <div className="item__arrow-up">
              <img src={arrowUp} alt="seta para cima" />
            </div>
          </div>
          <div className="modes-item-2">
            <img className="icon-heart1" src={coracao} alt="Coração com uma mão" />
            <h3 className="item-title">Sou ong </h3>
            <p className="item-description"> Quero ser parceiro! </p>
            <button className="btn-registration" onClick={toFormularioMercado}>Cadastre-se!</button>
            <div className="item__arrow-up">
              <img src={arrowUp} alt="seta para cima" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="s-desperdicios">
      <div className="container">
        <div className="wrapper">
          <div className="content-text">
            <h3 className="title-content"> Números do desperdício </h3>
            <p className="description"> e continua crescendo, tá?</p>
          </div>
          <div className="list-number">
            <div className="container-item">
              <h4 className="container-item__title">+33 milhões</h4>
              <p className="container-item__description">
                de pessoas atingidas pela forme no Brasil hoje, quase o dobro em
                relação a 2020.
              </p>
            </div>
            <div className="container-item">
              <h4 className="container-item__title">1,3 bilhão</h4>
              <p className="container-item__description">
                de alimentos que são desperdiçados no mundo todo
              </p>
            </div>
            <div className="container-item">
              <h4 className="container-item__title">58%</h4>
              <p className="container-item__description">
                da população brasileira convive com a insegurança alimentar em grau
                leve, moderado ou grave(fome)
              </p>
            </div>
            <div className="container-item">
              <h4 className="container-item__title">13,6 milhões</h4>
              <p className="container-item__description">
                de brasileiro poderiam ser alimentados apenas com a quantidade de
                alimentos desperdiçados
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="s-inconformados">
      <div className="container">
        <div className="wrapper">
          <picture className="area-image">
            <img className="img" src={equipe} alt="foto da esquipe desenvolvedora" />
          </picture>
          <div className="text-content">
            <p className="subtitle"> Vamos mudar esses números? </p>
            <h2 className="title-content">
              {" "}
              Somos indignados com o desperdício de alimentos e focados em
              combatê-lo.
            </h2>
            <ul className='bullet'>
              <li className='bullet-content'>
                <figure>
                  <img className="img" src={bullet} alt="foto da esquipe desenvolvedora" />
                </figure>
                <p>Criamos a Alimentum uma foodtech sem fins lucrativos.</p>

              </li>
              <li className='bullet-content'>
                <figure>
                  <img className="img" src={bullet2} alt="foto da esquipe desenvolvedora" />
                </figure>
                <p>Queremos contribuir com o desenvolvimento sustentável.</p>

              </li>
              <li className='bullet-content'>
                <figure>
                  <img className="img" src={bullet3} alt="foto da esquipe desenvolvedora" />
                </figure>
                <p>Queremos alimentar pessoas.</p>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <section className="s-selo">
      <div className="container">
        <div className="wrapper">
          <div className="text-content">
            <h2 className='title-content'>Conheça o nosso selo de empresa participante!</h2>
          </div>

        </div>
        <div className="wrapper-content">
          <div className="text-content-one">
          <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
            <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
            <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
          </div>
          <div className="area-image">
            <figure>
              <img className='img' src={selo} alt="smarthphone" />
            </figure>
          </div>
          <div className="text-content-two">
            <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
            <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
            <div className="content-icon">
              <div className="icon">
                <figure>
                  <img className="img" src={check} alt="foto da esquipe desenvolvedora" />
                </figure>
              </div>
              <div className="text-description">
                <p>Empresa comprometida com zero desperdício</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className='carrossel'>
      <div className="container">
      <div className="wrapper">

     

      <p className='text-carrossel'>Alimento é o que nos move e desperdiçá-lo não é uma opção​.</p>
      <div className='group-carrossel'>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img src={man} alt=" elipse" />
          </div>
          <div className='group-text-card'>
            <p className='text1-card'>”Essa parceria esta mudando a forma que destinamos alimentos!”</p>
            <p className='text2-card'>João Reis.<br>
              </br>CEO Supermercados</p>
          </div>
        </div>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img src={man} alt=" elipse" />
          </div>
          <div className='group-text-card'>
            <p className='text1-card'>”Essa parceria esta mudando a forma que destinamos alimentos!”</p>
            <p className='text2-card'>João Reis.<br>
              </br>CEO Supermercados</p>
          </div>
        </div>
        
      </div>
      <img className='bolinhas' src={bolinhas} alt="bolinhas do carrossel" />
      </div>
      </div>
    </section>
    <div className='page4'>
      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text1-page4'>Faça seu cadastro</p>
          <p className='text2-page4'>Passo 1</p>
          <p className='description-page3'>Clique no botão cadastre-se e preencha seus dados, se for empresa ou ONG.
          </p>
          <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
          <img className='print-passos' src={rectangleCadastro} alt="retangulo-cadastro" />
        </div>
      </div>
      <div className='line1-page4'>
        <img src={line1} alt="linha de conexão" />
      </div>

      <div className='main-page4'>
        <div className='image-page4'>
          <img className='print-passos' src={rectangleHome} alt="retangulo-home" />
        </div>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 2</p>
          <p className='description-page3'>Depois de fazer seu cadastro, você precisa fazer login na plataforma.</p>
          <button className='button-page4'>Cadastre-se!</button>
        </div>
      </div>
      <div className='line1-page4'>
        <img src={line2} alt="linha de conexão" />
      </div>


      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 3</p>
          <p className='description-page3'>Logo depois de fazer o login, você terá acesso a sua dashboard, onde poderá
            então escolher se quer fazer doação,
            se for empresa ou se deseja receber doação em caso de ong.</p>
          <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
          <img className='print-passos' src={rectangleDashboard} alt="retangulo-verde" />
        </div>
      </div>
      <div className='line1-page4'>
        <img src={line1} alt="linha de conexão" />
      </div>

      <div className='main-page4'>
        <div className='image-page4'>
          <img className='print-passos' src={rectangleCatalogo} alt="retangulo-verde" />
        </div>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 4</p>
          <p className='description-page3'>Aqui é o nosso catalogo,
            onde poderá escolher o que pretende doar ou o que precisa receber.</p>
          <button className='button-page4'>Cadastre-se!</button>
        </div>
      </div>
      <footer className='footer-home'>
        <div className='group-footer-home'>
          <div className='group-text-footer'>
            <p className='text1-footer-home'>Entre em contato.<br>
              </br> Preencha esse formulário e tire suas dúvidas!</p>
            <img className='logo-footer' src={logoPage} alt="logo" />
            <p className='text2-footer-home'>Credibilidade e ousadia, são algumas das <br>
              </br> nossas características.</p>
            <p className='text3-footer-home'>Acompanhe nas redes</p>
          </div>
          <div className='input-footer-home'>
            <input className='input-footer-nome' type="text" placeholder='Nome' />
            <input className='input-footer-email' type="text" placeholder='Email' />
            <textarea className='textarea-footer' name="" id="" cols="60" rows="10" placeholder='Mensagem'></textarea>
            <div className='links-footer'>
              <a href="">Institucional</a>
              <a href="">Contato</a>
              <a href="">Sobre nós</a>
              <a href="">Politicas de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
</div>

)
}
export default Home;