import './modalparceiro.css'
import logo from '../../assets/catalogo/logo.png';

export default function Modalparceiro(props){
return(
    <div className='container-parceiro'>
      <section className='modais'>
        <div className='modal-parceiro'>
          <img className='modal__logo'src={logo} alt="logo" />
             <h1 className='modal__description'>Faça sua doação aqui</h1>
             <div className='modal__input'>
               <p className='modal__description'>Sou Parceiro</p>
                <input className='input' type="text" placeholder="Digite a quantidade"/>
             </div>
          <div className='button'>
            <button className='modal__button'>Enviar</button>
            <button onClick={() => props.setShowModal(false)}>Fechar</button>
            </div>
        </div>
      </section>
    </div>

)
}
