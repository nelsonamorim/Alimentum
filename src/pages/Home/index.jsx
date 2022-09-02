import './style.css';

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

function Home(){
   return(
      <div className="container-home">
  <header className="header-home">
    <a href="#" className="link-default header__logo">
     <img src={logoPage} alt="logo" />
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
      <button className="menu__item btn-signin">Login</button>
    </nav>
  </header>
  <main className='main-home'>
    <div className="container">
      <div className="page-main">
        <div className="page1-text-center">
          <p className="page1-tex1"> Conectando empresas com ONG's </p>
          <p className="page1-tex2">Queremos colaborar com zero desperdício </p>
        </div>
        <div className="image-home">
          <img className='img-page' src={imgPage} alt="Imagem-Frutas" />
        </div>
      </div>
      <div className="container-emp-modal">
        <div className="container-emp">
          <img className="icon-heart1"src={coracao}alt="Coração com uma mão"/>
          <p className="item-title">Sou empresa </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src={arrowUp} alt="seta para cima" />
          </div>
        </div>
        <div className="container-ong-home-modal">
          <img className="icon-heart1"  src={coracao} alt="Coração com uma mão"
          />
          <p className="item-title">Sou ong </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src={arrowUp} alt="seta para cima" />
          </div>
        </div>
      </div>
    </div>
    <div className="page2">
      <div className="header-page2">
        <p className="numberedList"> Números do desperdício </p>
        <p className="listedUp"> e continua crescendo, tá?</p>
      </div>
      <div className="container-qlt">
        <div className="container-item">
          <p className="container-item__title">+33 milhões</p>
          <p className="container-item__description">
            de pessoas atingidas pela forme no Brasil hoje, quase o dobro em
            relação a 2020.
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">1,3 bilhão</p>
          <p className="container-item__description">
            de alimentos que são desperdiçados no mundo todo
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">58%</p>
          <p className="container-item__description">
            da população brasileira convive com a insegurança alimentar em grau
            leve, moderado ou grave(fome)
          </p>
        </div>
        <div className="container-item">
          <p className="container-item__title">13,6 milhões</p>
          <p className="container-item__description">
            de brasileiro poderiam ser alimentados apenas com a quantidade de
            alimentos desperdiçados
          </p>
        </div>
      </div>
      <div className="main__page2">
        <img
          className="img_equipe"src={equipe} alt="foto da esquipe desenvolvedora"
        />
        <div className="main__page2_right">
          <p className="main__page2__item__1"> Vamos mudar esses números? </p>
          <p className="main__page2__item__2">
            {" "}
            Somos indignados com o desperdício de alimentos e focados em
            combatê-lo, criamos assim a Alimentum, uma foodtech sem fins
            lucrativos.
          </p>
          <p className="main__page2__item__3">
            {" "}
            Através da nossa plataforma, conectamos Produtos FIFO de Indústrias
            Alimentícias com o Ong's que poderão usá-los como matéria-prima em
            sua produção. Assim, todos que estão envolvidos ajudam a combater o
            desperdício de alimentos perecíveis de uma forma inteligente,
            colocando comida no prato de pessoas que mais precisam e passam por
            insegurança alimentar no brasil.
          </p>
        </div>
      </div>
    </div>
    <div className='page3'>
      <div className='main-page3'>
        <div className='text-page3'>
            <p className='description-page3'>Conheça o nosso selo de empresa participante!</p>
            <p className='description2-page3'>Ao ajudar nossas ONG`s você empresa ganha um 
           selo de empresa comprometida com o zero desperdício</p>
            <p className='description3-page3'>ajudando na sua reputação e criando um movimento, assim, 
            levando mais clientes preocupados com sustentabilidade ambiental.</p>
        </div>
        <div className='ilustracao-page3'>
          <img className='ilustracao-smarthphone' src={selo} alt="smarthphone" />
        </div>
     </div>
    </div>
    <div className='carrossel'>
      <p className='text-carrossel'>Alimento é o que nos move e desperdiçá-lo não é uma opção​.</p>
      <div className='group-carrossel'>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img  src={elipse} alt=" elipse" />
            </div>
          <div className='group-text-card'>
            <p className='text1-card'>”Essa parceria esta mudando a forma que destinamos alimentos!”</p>
            <p className='text2-card'>João Reis.<br>
            </br>CEO Supermercados</p>
          </div>
        </div>
        <div className='card-carrossel'>
          <div className='elipse-card'>
            <img  src={elipse} alt=" elipse" />
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
    <div className='page4'>
      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text1-page4'>Faça seu cadastro</p>
          <p className='text2-page4'>Passo 1</p>
          <p className='description-page3'>Clique no botão cadastre-se e preencha seus dados, se for empresa ou ONG. </p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
        <img className='print-passos' src={rectangleCadastro} alt="retangulo-cadastro" />
       </div>
      </div>
      <div className='line1-page4'>
        <img  src={line1} alt="linha de conexão" />
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
        <img  src={line2} alt="linha de conexão" />
      </div>


      <div className='main-page4'>
        <div className='group-text-page4'>
          <p className='text2-page4'>Passo 3</p>
          <p className='description-page3'>Logo depois de fazer o login, você terá acesso a sua dashboard, onde poderá então escolher se quer fazer doação,
           se for empresa ou se deseja receber doação em caso de ong.</p>
            <button className='button-page4'>Cadastre-se!</button>
        </div>
        <div className='image-page4'>
        <img className='print-passos' src={rectangleDashboard} alt="retangulo-verde" />
       </div>
      </div>
      <div className='line1-page4'>
        <img  src={line1} alt="linha de conexão" />
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
              <input className='input-footer-email'type="text" placeholder='Email' />
              <textarea  className='textarea-footer' name="" id="" cols="60" rows="10"placeholder='Mensagem'></textarea>
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