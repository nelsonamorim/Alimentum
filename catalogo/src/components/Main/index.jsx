import './style.css';

import laranja from '../../assets/images/laranja.png';
import banana from '../../assets/images/banana-01.png';
import tomate from '../../assets/images/tomate.jpg';
import cebola from '../../assets/images/cebola-02.png';
import abobora from '../../assets/images/abobora.png';
import batata from '../../assets/images/batata.png';
import cenoura from '../../assets/images/cenoura.png';
import mamao from '../../assets/images/mamao.png';
import pepino from '../../assets/images/pepino.png';
import alface from '../../assets/images/alface.jpg';
import maca from '../../assets/images/maca.jpg';
import beterraba from '../../assets/images/beterraba.png';


export const Main = ()=>{
  return(
    <main className='main__catalogo'>
      <div className='card__catalogo'>
        <h2 className='card__title'>Laranja - 7kg</h2>
         <img className='card__image' src={laranja} alt="Laranja"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Banana - 4kg</h2>
         <img className='card__image' src={banana} alt="Banana"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Tomate - 3kg</h2>
         <img className='card__image' src={tomate} alt="Tomate"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Cebola- 3kg</h2>
         <img className='card__image' src={cebola} alt="Cebola"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Abóbora - 3kg</h2>
         <img className='card__image' src={abobora} alt="Abóbora "/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Beterraba- 3kg</h2>
         <img className='card__image' src={beterraba} alt="Beterraba"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Batata  - 3kg</h2>
         <img className='card__image' src={batata} alt="Batata a"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      <div className='card__catalogo'>
        <h2 className='card__title'>Cenoura  - 3kg</h2>
         <img className='card__image' src={cenoura} alt="Cenoura "/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div><div className='card__catalogo'>
        <h2 className='card__title'>Pepino - 3kg</h2>
         <img className='card__image' src={pepino} alt="Pepino"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div><div className='card__catalogo'>
        <h2 className='card__title'>Mamão- 3kg</h2>
         <img className='card__image' src={mamao} alt="Mamão"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div><div className='card__catalogo'>
        <h2 className='card__title'>Alface - 3kg</h2>
         <img className='card__image' src={alface} alt="Alface"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div><div className='card__catalogo'>
        <h2 className='card__title'>Maçã - 3kg</h2>
         <img className='card__image' src={maca} alt="Maçã"/>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
      
    </main>
  )
}
