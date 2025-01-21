import { useState } from 'react'
import './App.css'
import logoimg from './assets/logo.png'

function App() {

  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite que você pode, e você já estará no meio do caminho. – Theodore Roosevelt",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia. – Robert Collier",
        "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo. – Zig Ziglar",
        "A persistência é o caminho do êxito. – Charles Chaplin",
        "Sua única limitação é a sua mente.",
        "O fracasso é apenas a oportunidade de começar de novo com mais inteligência. – Henry Ford",
        "Não espere por oportunidades, crie-as. – George Bernard Shaw",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos. – Eleanor Roosevelt",
        "Você é mais forte do que imagina e mais capaz do que acredita.",
        "Não é sobre o tempo que você tem, mas sobre o que você faz com ele."
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Que o seu dia seja tão lindo quanto o seu sorriso e tão especial quanto você. Bom dia!",
        "Bom dia! Que hoje você encontre motivos para sorrir e energia para realizar seus sonhos.",
        "Cada amanhecer traz uma nova oportunidade para sermos felizes. Aproveite! Bom dia!",
        "Bom dia! Que as bênçãos deste dia iluminem sua caminhada e encham seu coração de alegria.",
        "Hoje é um presente. Desfrute cada momento com gratidão e esperança. Bom dia!",
        "Bom dia! Que sua manhã seja leve, sua tarde produtiva e sua noite tranquila.",
        "Aproveite cada instante deste novo dia para ser sua melhor versão. Bom dia!",
        "Que o sol brilhe no céu e no seu coração. Tenha um dia incrível!",
        "Bom dia! Que a paz e a alegria sejam suas companheiras ao longo de todo o dia.",
        "Mais um dia para sonhar, acreditar e realizar. Bom dia com muita luz!"
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
   setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`);
  }

  return (
    <div className='container'>
      <img src={logoimg} alt="Logo frases" className='logo'/>

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button className='category-button' key={item.id} style={{borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0, borderColor: "#1fa4db"}} onClick={() => handleSwitchCategory(index)}>
            {item.nome}
          </button>
        ))}
      </section>
      <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
    </div>
  )
}

export default App