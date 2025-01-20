import { useState } from 'react'
import './App.css'
import logoimg from './assets/logo.png'

function App() {

  return (
    <div className='container'>
      <img src={logoimg} alt="Logo frases" className='logo'/>

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>
      <button className='button-frase'>Gerar Frase</button>

      <p className='textoFrase'>Alguma frase vai vir aqui</p>
    </div>
  )
}

export default App