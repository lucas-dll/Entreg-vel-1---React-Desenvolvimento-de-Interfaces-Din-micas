// Os textos deste roteiro são únicos e servem como keys estáveis.
function Lista({ itens }) {
  return (
    <ul className="study-list">
      {itens.map((item) => (
        <li key={item}>
          <span className="list-mark" aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Lista
