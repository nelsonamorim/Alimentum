import elipse from "../../assets/dashboard/elipse.png";
import logo from "../../assets/dashboard/logo.png";
import rectangle from "../../assets/dashboard/rectangle-1.png";
import rectangle2 from "../../assets/dashboard/rectangle-2.png"


import './style.css';

export default function Dashboard(){
   return(
      <div className="container">
  <section className="section_navigate">
    <span>
      <img className="logo" src={logo} alt="logo" />
    </span>
    <hr />
    <a className="item-navigate-destaque" href="#">
      <img className="icon" src={rectangle2} alt="icon" />
      Home
    </a>
    <a className="item-navigate" href="#">
      <img className="icon" src={rectangle-1} alt="icon" />
      Sou ONG
    </a>
    <a className="item-navigate" href="#">
      <img className="icon" src={rectangle-1} alt="icon" />
      Sou Empresa
    </a>
    <a className="item-navigate" href="#">
      <img className="icon" src={rectangle-1}  alt="icon" />
      Ranking
    </a>
    <a className="item-navigate" href="#">
      <img className="icon" src={rectangle-1}  alt="icon" />
      Dúvidas
    </a>
    <a className="item-navigate" href="#">
      <img className="icon" src={rectangle-1}  alt="icon" />
      Configurações
    </a>
  </section>
  <main className="main_dashboard">
    <input className="search" type="search" placeholder="Pesquisar" />
    <h1 className="titulo_dashboard">Dashboard</h1>
    <div className="recado-dashboard">
      <div className="saudacao">
        <h4>Bem-vindo, Jane Doe 😀</h4>
        <p className="descricao_recado">
          Utilize o painel para gerenciar todas as suas doações e acompanhar
          suas comidas arrecadadas
        </p>
        <div className="imagem-saudacao" />
      </div>
    </div>
    <h2 className="titulo_acesso-rapido">Acesso Rápido</h2>
    <ul className="card_acesso">
      <li className="card_acesso_itens">
        <img className="image_item" src={elipse} alt="elipse" />
        <p>Quero Doar</p>
      </li>
      <li className="card_acesso_itens">
        <img className="image_item" src={elipse}  alt="elipse" />
        <p>Quero Receber</p>
      </li>
      <li className="card_acesso_itens">
        <img className="image_item" src={elipse} alt="elipse" />
        <p>Catalogo</p>
      </li>
    </ul>
  </main>
  <section className="ranking">
    <h3 className="titulo_ranking"> 🏆 Ranking</h3>
    <button className="button_ranking">Mês Atual</button>
    <button className="button_ranking">Mês Passado</button>
    <ul className="group_itens-ranking">
      <li className="itens_ranking">
        <p className="classificacao">01</p>
        MercadoXP
        <p className="kg">30 kilos</p>
      </li>
      <li className="itens_ranking-destaque">
        <p className="classificacao">01</p>
        MercadoUnião
        <p className="kg">30 kilos</p>
      </li>
      <li className="itens_ranking">
        <p className="classificacao">01</p>
        LojinhaSeuMurici
        <p className="kg">30 kilos</p>
      </li>
    </ul>
  </section>
</div>
   )
}