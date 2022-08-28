import Container  from "../../components/Container";
import Header  from "../../components/Header";
import laranja from '../../assets/catalogo/laranja.png';
import banana from '../../assets/catalogo/banana-01.png';
import tomate from '../../assets/catalogo/tomate.jpg';
import cebola from '../../assets/catalogo/cebola-02.png';
import abobora from '../../assets/catalogo/abobora.png';
import batata from '../../assets/catalogo/batata.png';
import cenoura from '../../assets/catalogo/cenoura.png';
import mamao from '../../assets/catalogo/mamao.png';
import pepino from '../../assets/catalogo/pepino.png';
import alface from '../../assets/catalogo/alface.jpg';
import maca from '../../assets/catalogo/maca.jpg';
import beterraba from '../../assets/catalogo/beterraba.png';
import coracao from  '../../assets/catalogo/coracao.png';
import delivery from  '../../assets/catalogo/delivery.png';
import Modalparceiro from "../../components/Modalparceiro";
import ModalONG from "../../components/ModalONG";
 import * as React from 'react'
import './style.css';

export default function Catalogo (){
   const [showModal,setShowModal] = React.useState(false);
  return(
    <div >
        <Container>
         <Header/>
         <div className="container-catalogo">
         <main className='main__catalogo'>
            <div className='card__catalogo'>
              <h2 className='card__title'>Laranja - 7kg</h2>
              <img className='card__image' src={laranja} alt="Laranja"/>
               <button onClick={() => setShowModal(true)} id="doar"className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" /> Doar</button>
              {showModal && <Modalparceiro setShowModal={setShowModal} />}
              <button 
              className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Banana - 4kg</h2>
              <img className='card__image' src={banana} alt="Banana"/>
              <button className='button__doar'> 
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Tomate - 3kg</h2>
              <img className='card__image' src={tomate} alt="Tomate"/>
              <button className='button__doar'> 
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Cebola- 3kg</h2>
              <img className='card__image' src={cebola} alt="Cebola"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Abóbora - 3kg</h2>
              <img className='card__image' src={abobora} alt="Abóbora "/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Beterraba- 3kg</h2>
              <img className='card__image' src={beterraba} alt="Beterraba"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Batata  - 3kg</h2>
              <img className='card__image' src={batata} alt="Batata a"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div>
            <div className='card__catalogo'>
              <h2 className='card__title'>Cenoura  - 3kg</h2>
              <img className='card__image' src={cenoura} alt="Cenoura "/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div><div className='card__catalogo'>
              <h2 className='card__title'>Pepino - 3kg</h2>
              <img className='card__image' src={pepino} alt="Pepino"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div><div className='card__catalogo'>
              <h2 className='card__title'>Mamão- 3kg</h2>
              <img className='card__image' src={mamao} alt="Mamão"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div><div className='card__catalogo'>
              <h2 className='card__title'>Alface - 3kg</h2>
              <img className='card__image' src={alface} alt="Alface"/>
              <button className='button__doar'>
                <img className="icone-doar" src= {coracao} alt="" /> Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>
            </div><div className='card__catalogo'>
              <h2 className='card__title'>Maçã - 3kg</h2>
              <img className='card__image' src={maca} alt="Maçã"/>
              <button className='button__doar'>
              <img className="icone-doar" src= {coracao} alt="icone-doar" />Doar</button>
              <button className='button__receber'>
              <img className="icone-doar" src= {delivery} alt="icone-doar" />Receber</button>

            </div>            
          </main>
          </div>
       </Container>
    </div>


  )
}


