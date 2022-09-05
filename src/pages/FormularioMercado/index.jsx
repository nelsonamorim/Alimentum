import './style.css';
import logoAlimentum from '../../assets/form-mercado/logoAlimentum.png';
import iconX from '../../assets/form-mercado/iconX.png';
import barraDeProgresso from '../../assets/form-mercado/progressBar.png';
import cadeado from '../../assets/form-mercado/cadeado.png';
import {useNavigate} from 'react-router-dom';
import CheckboxList from '../../components/CheckboxList';
import RadioButton from '../../components/RadioButton';





function FormularioMercado() {

  const navigate = useNavigate();

  const toLogin = () => {
    navigate ('/login');
  }

  const toHome = () => {
    navigate ('/home');
  }

  return(
  <div className="container__formulario">    
    <div className="logo__container">
      <img src={logoAlimentum} className='img__logo-alimentum' alt="" />
    </div>
    <form className="form-cadastro__parceiro" method="post" action="">
      <div className="progress__bar">
        <img src={barraDeProgresso} alt="barra de progresso" />
      </div>
      <div className="title">
        <h2>Cadastro</h2>
        <p>Preencha os dados cadastrais. É rapidinho.</p>
      </div>
      <div className="notification">
        <img src={cadeado} alt="" />
        <p>
          Levamos as questões de privacidade a sério. Você pode ter certeza de que
          seus dados pessoais estão protegidos com segurança.
        </p>
        <img src={iconX} alt="" />
      </div>
      <div className="form-cadastro__parceiro-inputs">
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="usuario_email"
            placeholder="exemplo@exemplo.com"
          />
        </div>
        <div className="razao__social">
          <label htmlFor="razao__social">Razão Social</label>
          <input
            type="text"
            id="razao__social"
            name="razao__social"
            placeholder="sua resposta"
          />
        </div>
        <div className="cnpj">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" name="cnpj" placeholder="sua resposta" />
        </div>
        <div className="nome__fantasia">
          <label htmlFor="nome__fantasia">Nome Fantasia</label>
          <input
            type="text"
            id="nome__fantasia"
            name="nome__fantasia"
            placeholder="sua resposta"
          />
        </div>
        <div className="nome__responsavel">
          <label htmlFor="nome__responsavel">Nome do responsável</label>
          <input
            type="text"
            id="nome__responsavel"
            name="nome__responsavel"
            placeholder="sua resposta"
          />
        </div>
        <div className="telefone">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(xx) xxxxx-xxxx"
          />
        </div>
        <div className="endereco">
          <h3 className="title__endereco">Endereço</h3>
          <p className="texto__endereco">Usado para envio de pedidos</p>
        </div>
        <div className="logradouro">
          <label htmlFor="logradouro">Qual o endereço da sua empresa?</label>
          <input
            type="text"
            id="logradouro"
            name="logradouro"
            placeholder="sua resposta"
          />
        </div>
        <div className="container__numero__bairro">
          <div className="numero">
            <label htmlFor="numero">Número</label>
            <input
              type="number"
              id="numero"
              name="numero"
              placeholder="sua resposta"
            />
          </div>
          <div className="bairro">
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              placeholder="sua resposta"
            />
          </div>
        </div>
        <div className="cidade">
          <label htmlFor="bairro">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="sua resposta"
          />
        </div>
        <div className="estado">
          <label htmlFor="bairro">Estado/UF</label>
          <select id="estado" className="estado__caixa" name="estado">
            <option value="seta" selected="" />
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </div>
        <div className="checkbox-dias-da-semana-mercado">
          <h3 className='title-checkbox__dias-da-semana-mercado'>Quais são os dias específicos para envio dos alimentos:
          *</h3>
          <CheckboxList />
        </div>
        <div className="horario-de-entrega">
          <label 
            htmlFor="horario-de-entrega">Qual horário de entrega?*
          </label>
          <RadioButton />

          <input
            type="text"
            id="horario-entrega"
            name="horario-entrega"
            placeholder="sua resposta"
          />
        </div>
        <button className='btn-enviar-formulario' onClick = {toLogin}>Enviar</button>
      </div>
    </form>
    <div className="muted__button" onClick = {toHome}>
      <img src={iconX} alt="" />
    </div>
  </div>
  );
  
  
}


export default FormularioMercado;



