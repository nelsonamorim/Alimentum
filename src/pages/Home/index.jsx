import './style.css';

function Home(){
   return(
      <div className="container-home">
  <header className="header-home">
    <a href="#" className="link-default header__logo">
      <p className="logo-A"> A</p>
      <p>Alimentum </p>
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
  <main>
    <div className="page1">
      <div className="page-main">
        <div className="page1-text-center">
          <p className="page1-tex1"> Conectando empresas com pessoas </p>
          <p className="page1-tex2">
            {" "}
            Queremos colaborar com zero desperdício{" "}
          </p>
        </div>
        <div className="img-center">
          <img
            className="imgPage1"
            src="./assets/imgPage1.png"
            alt="Imagem-Frutas"
          />
        </div>
      </div>
      <div className="container-emp-ong">
        <div className="container-emp">
          <img
            className="icon-heart1"
            src="./assets/coracao1.png"
            alt="Coração com uma mão"
          />
          <p className="item-title">Sou empresa </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src="./assets/ep_arrow-up.png" alt="seta para cima" />
          </div>
        </div>
        <div className="container-ong">
          <img
            className="icon-heart1"
            src="./assets/coracao1.png"
            alt="Coração com uma mão"
          />
          <p className="item-title">Sou ong </p>
          <p className="item-description"> Quero ser parceiro! </p>
          <button className="btn-registration">Cadastre-se!</button>
          <div className="item__arrow-up">
            <img src="./assets/ep_arrow-up.png" alt="seta para cima" />
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
          className="img__cruz"
          src="./assets/imgCruz.png"
          alt="Coração com uma mão"
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
  </main>
</div>

   )
}
export default Home;