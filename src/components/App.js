import React from 'react'
import PostsList from './PostsList'

// Perceba que, diferentemente do <PostsList />, o componente <App /> não precisou ser definido
// com uma classe. Aqui nós o definimos como um componente funcional, ou stateless component.
// Como ele não tem state e não trabalha com métodos do ciclo de vida, podemos usar uma função
// que retorna um JSX.

export default function App () {
  return (
    <div>
      <PostsList />
    </div>
  )
}
