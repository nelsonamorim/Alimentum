import elipse from "../../assets/dashboard/elipse1.png";
import logo from "../../assets/dashboard/logo.png";
import doar from "../../assets/dashboard/doar.png";
import delivery from "../../assets/dashboard/delivery.png";
import rectangle from "../../assets/dashboard/rectangle-1.png";
import elipseranking from "../../assets/dashboard/elipse-ranking.png";
import award from "../../assets/dashboard/award.png";
import awardstar from "../../assets/dashboard/award-star.png";
import {Link, useNavigate} from 'react-router-dom';

import './style.css';

export default function Dashboard(){

  const navigate = useNavigate();

  const toCatalogo = () => {
    navigate ('/catalogo');
  }

   return(
      <div className="container">
  <section className="section_navigate">
    <span>
      <img className="logo" src={logo} alt="logo" />
    </span>
    <hr />
    <a className="item-navigate-destaque" href="">
      <img className="icon" src={rectangle} alt="icon" />
      Home
    </a>
    <a className="item-navigate item-navigate-ong" onClick = {toCatalogo}>
      <img className="icon" src={rectangle} alt="icon" />
      Sou ONG
    </a>
    <a className="item-navigate item-navigate-empresa" onClick = {toCatalogo}>
      <img className="icon" src={rectangle} alt="icon" />
      Sou Empresa
    </a>
    <a className="item-navigate" href="">
      <img className="icon" src={rectangle}  alt="icon" />
      Ranking
    </a>
    <a className="item-navigate" href="">
      <img className="icon" src={rectangle}  alt="icon" />
      Dúvidas
    </a>
    <a className="item-navigate" href="">
      <img className="icon" src={rectangle}  alt="icon" />
      Configurações
    </a> 
   
    <div className="usuario">
      <p>Jane Doe</p>
      <p>Admin ONG</p>
    </div>

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
        <img className="image_item" src={doar} alt="elipse" />
        <p className="descricao-acesso">Quero Doar</p>
      </li>
      <li className="card_acesso_itens">
        <img className="image_item" src={delivery}  alt="elipse" />
        <p className="descricao-acesso">Quero Receber</p>
      </li>
      <li className="card_acesso_itens">
        <img className="image_item" src={elipse} alt="elipse" />
        <p className="descricao-acesso">Catalogo</p>
      </li>
    </ul>

  </main>
  <section className="ranking">
    <h3 className="titulo_ranking"> 🏆 Ranking</h3>
    <div className="group-buttons">
       <button className="button_ranking">Mês Atual</button>
       <button className="button_ranking">Mês Passado</button>
    </div>
    <ul className="group_itens-ranking">
      <li className="itens_ranking">
        <p className="classificacao">01
        <div className="icone-award">
         <img src={award} alt="" />
        </div>
        <img  className="ranking-icon" src={elipseranking} alt="icon" />
        <img src="" alt="" /></p>
        MercadoXP
        <p className="kg">30 <br/> kilos</p>
      </li>
      <li className="itens_ranking-destaque">
        <p className="classificacao">01
        <div className="icone-award">
         <img src={awardstar} alt="" />
        </div>
        <img  className="ranking-icon" src={elipseranking} alt="icon" /></p>
        MercadoUnião
        <p className="kg">30 <br/> kilos</p>
      </li>
      <li className="itens_ranking">
        <p className="classificacao">01
        <div className="icone-award">
         <img src={awardstar} alt="" />
        </div>
        <img className="ranking-icon"  src={elipseranking} alt="icon" /></p>
        LojinhaSeuMurici
        <p className="kg">30<br/>kilos</p>
      </li>
    </ul>
  </section>
</div>
   )
}