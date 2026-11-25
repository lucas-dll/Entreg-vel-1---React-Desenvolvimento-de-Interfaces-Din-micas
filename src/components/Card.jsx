// As props permitem reutilizar a mesma estrutura com conteúdos diferentes.
function Card({ categoria, titulo, descricao, topicos, simbolo, tom }) {
  return (
    <article className={`card card--${tom}`}>
      <div className="card-top">
        <span className="card-symbol" aria-hidden="true">{simbolo}</span>
        <span className="card-category">{categoria}</span>
      </div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="card-tags">
        {topicos.map((topico) => <span key={topico}>{topico}</span>)}
      </div>
    </article>
  )
}

export default Card
