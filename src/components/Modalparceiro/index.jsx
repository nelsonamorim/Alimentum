import './modalparceiro.css'
import logo from '../../assets/catalogo/logo.png';
import close from '../../assets/catalogo/close-button.png'

export default function Modalparceiro(props){
return(
  <><><div className='container-parceiro'>
  </div></><div className='modal'>
      < section className='modal-parceiro'>
        <img className='modal__logo' src={logo} alt="logo" />
        <h1 className='modal__description'>Faça sua doação aqui</h1>
        <div className='modal__input'>
          <p className='modal__description'>Sou Parceiro</p>
          <input className='input' type="text" placeholder="Digite a quantidade" />
        </div>
        <div className='button'>
          <button className='modal__button'>Enviar</button>
          <button onClick={() => props.setShowModal(false)}>
          <img className='button-clone' src={close} alt="button close" />
          </button>
        </div>
      </section>
    </div></>
)
}
