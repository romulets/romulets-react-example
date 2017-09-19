import React from 'react'
import ReactDOM from 'react-dom'

// Importamos nosso componente principal, também conhecido como "root component"
import App from './components/App'

// ReactDOM é o módulo responsável por renderizar componentes react no DOM.
// Normalmente a gente só precisa usá-lo uma vez pra renderizar o componente principal da sua aplicação.
ReactDOM.render(
  <App />, // o componente que a gente quer renderizar no DOM.
  document.getElementById('root') // o nó do DOM onde o <App /> será renderizado
)
