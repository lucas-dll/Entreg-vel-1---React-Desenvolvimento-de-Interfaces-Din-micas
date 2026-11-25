function Header() {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Clareia — início">
        <span className="brand-icon" aria-hidden="true">c.</span>
        clareia<span className="brand-dot">.</span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#conteudos">Conteúdos</a>
        <a href="#roteiro">Roteiro de estudos</a>
      </nav>
    </header>
  )
}

export default Header
