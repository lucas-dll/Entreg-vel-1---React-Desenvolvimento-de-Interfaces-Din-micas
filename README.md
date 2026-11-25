# Clareia · Painel de estudos

Primeira aplicação React desenvolvida para o **Entregável 1 de Desenvolvimento de Interfaces Dinâmicas e Reativas — Fundamentos de React e Componentes, Semana 08**.

O Clareia apresenta três conteúdos introdutórios de React e um roteiro de estudos. O visual usa cores suaves, cards e uma organização responsiva para computadores e celulares. Os links do cabeçalho e o botão inicial levam às seções da página. A lista é um roteiro de revisão, não um controle interativo de tarefas concluídas.

## Executar o projeto

É necessário ter Node.js compatível com o Vite 8 (20.19+ ou 22.12+) e npm instalados.

Abra o terminal **dentro de `painel-estudos-react`** e execute:

```bash
npm install
npm run dev
```

Acesse o endereço local informado pelo Vite no terminal.

Outros comandos:

```bash
npm run build    # Gera a versão de produção em dist/
npm run preview  # Exibe localmente a versão já compilada
npm run lint     # Verifica o código com Oxlint
```

## Organização

```text
painel-estudos-react/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   └── Lista.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Requisitos da atividade

| Parte | Implementação |
| --- | --- |
| 1 — Preparação | Projeto Vite com React, boilerplate removido e pasta `src/components`. |
| 2 — Componentes | `Header`, `Footer` e `Card` são componentes funcionais importados pelo `App`. O retorno do `App` usa um Fragment `<>...</>`. |
| 3 — Lista | `Lista` recebe um array de strings pela prop `itens` e renderiza uma `<ul>` com `.map()` e `key` em cada `<li>`. |
| 4 — Reflexão | Resposta apresentada abaixo. |

Há **cinco componentes funcionais**: `App`, `Header`, `Footer`, `Card` e `Lista`.

### Como os componentes se conectam

- **App:** contém os arrays de conteúdos e tópicos, organiza a página e passa os dados aos componentes filhos.
- **Header:** exibe a marca, a identificação da semana e a navegação.
- **Card:** recebe `categoria`, `titulo`, `descricao`, `topicos`, `simbolo` e `tom` por props. A mesma estrutura é reutilizada para os três conteúdos.
- **Lista:** recebe `itens`, um array de strings únicas, e transforma cada texto em um item da lista.
- **Footer:** apresenta a identificação da atividade e o texto de rodapé.

Exemplo de uso de props:

```jsx
<Lista itens={['Praticar JSX', 'Reutilizar componentes']} />
```

Dentro de `Lista`, os itens são renderizados assim:

```jsx
{itens.map((item) => (
  <li key={item}>
    <span className="list-mark" aria-hidden="true">✓</span>
    {item}
  </li>
))}
```

Os textos do roteiro são únicos; por isso, o próprio texto é usado como `key`. A chave deve ser única entre os irmãos e permanecer estável. Se a lista passar a aceitar textos repetidos ou itens editáveis, o ideal será usar objetos com identificadores estáveis.

O projeto usa `className`, nomes de componentes iniciados em maiúscula e tags devidamente fechadas. O Fragment permite retornar vários elementos agrupados sem criar uma `div` adicional no DOM.

## Reflexão: imperativo, declarativo e Virtual DOM

**Explique a diferença entre a abordagem imperativa (JavaScript puro/manipulação do DOM) e a declarativa (React). Por que o Virtual DOM otimiza a performance?**

Na abordagem **imperativa**, descrevemos passo a passo como modificar a interface. Com JavaScript e as APIs do DOM, selecionamos elementos, criamos nós, alteramos textos e inserimos ou removemos itens manualmente. Para montar uma lista, por exemplo, podemos criar uma `ul`, percorrer os dados, criar cada `li` e anexá-lo à lista.

Na abordagem **declarativa**, descrevemos como a interface deve ficar para determinados dados. No React, usamos JSX e componentes para representar esse resultado. Neste projeto, `Lista` recebe `itens` e usa `.map()` para declarar os elementos que devem aparecer. Quando props ou estado mudam, o React calcula a nova representação da interface e aplica as atualizações necessárias ao DOM.

O **Virtual DOM** é uma representação da interface mantida em memória. Durante a reconciliação, o React compara a nova representação com a anterior para decidir quais mudanças aplicar ao DOM real. Assim, ele pode preservar elementos existentes e atualizar apenas o necessário, em vez de recriar toda a página. As `keys` ajudam a identificar os itens entre renderizações.

Isso pode reduzir trabalho desnecessário no DOM e facilita organizar atualizações, mas **não significa que React seja sempre mais rápido do que JavaScript puro**. A comparação também tem custo, e a performance depende de como a aplicação é construída. Uma atualização direta e bem planejada no DOM pode ser mais barata em situações simples.

## GitHub e entrega

**Repositório:** [Desenvolvimento de Interfaces Dinâmicas](https://github.com/lucas-dll/Entreg-vel-1---React-Desenvolvimento-de-Interfaces-Din-micas)

Use esse link na entrega da atividade.

Os arquivos de código, `package.json` e `package-lock.json` devem ser versionados. As pastas `node_modules` e `dist` estão no `.gitignore` e não precisam ser enviadas.
