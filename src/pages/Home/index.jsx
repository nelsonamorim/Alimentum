import './style.scss';

import objetivos from '../../assets/home/objetivos.png'
import four from '../../assets/home/four.png';
import trhee from '../../assets/home/trhee.png';
import two from '../../assets/home/two.png';
import one from '../../assets/home/one.png';
import man from '../../assets/home/man.svg';
import check from '../../assets/home/check.png';
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


    <section className='s-cadastro'>
      <div className="container">
        <div className="wrapper">
          <div className="text-content">
            <h2 className='title-content'>Faça seu cadastro</h2>
            <p className='subtitle-content'>Aqui estão os passos a passos para você se cadastrar na nossa foodtech.</p>
            <button className='button-page4'>Cadastre-se</button>
          </div>
          <div className="modes-cadastro">
            <div className="mode-item">
              <div className="modes-itens">
                <div className="mode">
                  <figure>
                    <img className='mode-item' src={one} alt="one" />
                  </figure>
                </div>
                <div className="mode-content">
                  <h4 className='subtitle'>Passo 1</h4>
                  <p className='description-content'>Clique no botão cadastre-se e preencha seus dados, se for empresa
                    ou ONG. </p>
                </div>
              </div>
            </div>
            <div className="mode-item">
              <div className="modes-itens">
                <div className="mode">
                  <figure>
                    <img className='mode-item' src={two} alt="one" />
                  </figure>
                </div>
                <div className="mode-content">
                  <h4 className='subtitle'>Passo 1</h4>
                  <p className='description-content'>Depois de fazer seu cadastro, você precisa fazer login na
                    plataforma.</p>
                </div>
              </div>
            </div>
            <div className="mode-item">
              <div className="modes-itens">
                <div className="mode">
                  <figure>
                    <img className='mode-item' src={trhee} alt="one" />
                  </figure>
                </div>
                <div className="mode-content">
                  <h4 className='subtitle'>Passo 1</h4>
                  <p className='description-content'>Logo depois de fazer o login, você terá acesso a sua dashboard,
                    onde poderá então escolher se quer fazer doação, se for empresa ou se deseja receber doação em caso
                    de ong.</p>
                </div>
              </div>
            </div>
            <div className="mode-item">
              <div className="modes-itens">
                <div className="mode">
                  <figure>
                    <img className='mode-item' src={four} alt="one" />
                  </figure>
                </div>
                <div className="mode-content">
                  <h4 className='subtitle'>Passo 1</h4>
                  <p className='description-content'>Aqui é o nosso catalogo, onde poderá escolher o que pretende doar
                    ou o que precisa receber.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>

    <section className='objetivos'>
      <div className="container">
        <div className="wrapper">
          <div className="text-content-ods">
            <h2 className='title-content'>Ao se cadastrar você estará contribuindo com os objetivos de desenvolvimento
              sustentável da ONU</h2>
          </div>
          <figure className='area-image-ods'>
            <img className='mode-item' src={objetivos} alt="one" />
          </figure>
        </div>
      </div>

    </section>

    <footer className='footer-home'>
      <div className="container">

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
      </div>
    </footer>
  </main>
</div>

)
}
export default Home;