import './style.css';

export const Main = ()=>{
  return(
    <main className='main__catalogo'>
      <div className='card__catalogo'>
        <h2 className='card__title'>Laranja - 3kg</h2>
         <img className='card__image' src="assets/laranja.png" alt="Laranja"></img>
        <button className='button__doar'>Doar</button>
        <button className='button__receber'>Receber</button>
      </div>
    </main>
  )
}