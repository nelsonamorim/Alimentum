import './modalong.css'
import logo from '../../assets/catalogo/logo.png';
import close from '../../assets/catalogo/close-button.png'

export default function ModalONG(props){
return(
  <><><div className='container-ong'></div></>
    <div  className='modal'>
      <section className='modal-ong'>
      <button className='button-close'  onClick={() => props.setShowModal(false)}>
        <img className='icon-close' src={close} alt="icon-close" />
          </button>
         <img className='modal__logo'src={logo} alt="logo" />
             <h1 className='modal__description'>Faça sua doação aqui</h1>
             <div className='modal__input'>
               <p className='modal__description'>Sou ONG</p>
                <input className='input' type="text" placeholder="Digite a quantidade"/>
             </div>
          <div className='button'>
            <button className='modal__button'>Enviar</button>
          </div>
      </section>
    </div></>
)
}