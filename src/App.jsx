import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'
import Lista from './components/Lista.jsx'
import './App.css'

const conteudos = [
  {
    titulo: 'Pensar em React',
    categoria: 'React',
    descricao: 'Entenda como descrever uma interface e deixar o React cuidar das atualizações.',
    topicos: ['React', 'Vite', 'Declarativo'],
    simbolo: '⌘',
    tom: 'verde',
  },
  {
    titulo: 'Dar forma com JSX',
    categoria: 'JSX',
    descricao: 'Combine marcação e JavaScript para transformar ideias em elementos na tela.',
    topicos: ['JSX', 'Expressões', 'Fragments'],
    simbolo: '</>',
    tom: 'azul',
  },
  {
    titulo: 'Construir em partes',
    categoria: 'Componentes',
    descricao: 'Crie componentes reutilizáveis e conecte seus conteúdos por meio de props.',
    topicos: ['Componentes', 'Props', 'Listas'],
    simbolo: '▦',
    tom: 'lilas',
  },
]

const roteiro = [
  'Preparar o projeto com React e Vite',
  'Criar interfaces usando JSX',
  'Organizar e reutilizar componentes funcionais',
  'Compartilhar dados entre componentes com props',
  'Renderizar listas com map e keys únicas',
]

function App() {
  // O Fragment agrupa os elementos sem adicionar uma div ao DOM.
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo-principal">
        <section className="hero" id="inicio" aria-labelledby="titulo-principal">
          <div className="hero-copy">
            <h1 id="titulo-principal">Fundamentos de React</h1>
            <p className="hero-description">Conceitos de JSX, componentes e props.</p>
            <a className="primary-link" href="#conteudos">Explorar conteúdos</a>
          </div>
          <aside className="hero-note" aria-label="Estrutura de componentes">
            <div className="component-art" aria-hidden="true">
              <span>&lt;Header /&gt;</span>
              <div><span>&lt;Card /&gt;</span><span>&lt;Lista /&gt;</span></div>
              <span>&lt;Footer /&gt;</span>
            </div>
            <h2>Componentes</h2>
          </aside>
        </section>

        <section className="content-section" id="conteudos" aria-labelledby="titulo-conteudos">
          <div className="section-heading">
            <div><h2 id="titulo-conteudos">Conteúdos</h2></div>
          </div>
          <div className="cards">
            {conteudos.map((conteudo) => <Card key={conteudo.titulo} {...conteudo} />)}
          </div>
        </section>

        <section className="roadmap" id="roteiro" aria-labelledby="titulo-roteiro">
          <div className="roadmap-intro">
            <h2 id="titulo-roteiro">Roteiro de estudos</h2>
          </div>
          <Lista itens={roteiro} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
