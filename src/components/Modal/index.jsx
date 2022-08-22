import './style.css'
import logo from '../../assets/catalogo/logo.png';

export default function Modal (){
return(
    <section className='modais'>
      <div id='modal-parceiro' className='modal'>
        <img className='modal__logo'src={logo} alt="logo" />
           <h1 className='modal__description'>Faça sua doação aqui</h1>
           <div className='modal__input'>
             <p className='modal__description'>Sou Parceiro</p>
              <input className='input' type="text" placeholder="Digite a quantidade"/>
           </div>
        <div className='button'>
          <button className='modal__button'>Enviar</button>
          </div>
      </div>
    
      <div id='modal-ong' className='modal'>
       <img className='modal__logo'src={logo} alt="logo" />
           <h1 className='modal__description'>Faça sua doação aqui</h1> 
           <div className='modal__input'>
             <p className='modal__description'>Sou ONG</p>
              <input className='input' type="text" placeholder="Digite a quantidade"/>
           </div>
        <div className='button'>
          <button className='modal__button'>Enviar</button>
        </div>
      </div>
    </section>
)
}