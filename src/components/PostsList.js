import React, { Component } from 'react'

// `Component` é uma classe abstrata.
// Nós a usamos pra criar class-based components em React.

export default class PostsList extends Component {
  // Definimos o nosso state inicial.
  // Poderíamos ter definido o state dentro do método `constructor`.
  // Mas no JS conseguimos setar variáveis de instância de forma direta:

  state = {
    posts: [],
    isLoading: false
  }

  // Esse método faz parte do ciclo de vida do componente React.
  // `componentDidMount` será executado após o componante ser montado (renderizado)
  // pela primeira vez.
  //
  // Esse método é o ideal pra realizarmos chamadas AJAX pra popular nosso state.

  componentDidMount () {
    this.fetchPosts()
  }

  // Método simples pra carregar os posts da API.

  fetchPosts () {
    // Primeiramente setamos o state.isLoading como true.
    this.setState({ isLoading: true })

    // Fetch é uma função nativa dos browsers pra realizar requisições HTTP.
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        // Com os nossos posts em mão, vamos adicioná-lo ao state
        this.setState({
          isLoading: false,
          posts // atalho para `posts: posts`
        })
      })
      .catch(error => {
        // Deveríamos tratar esse erro de alguma forma, mas foda-se
        this.setState({
          isLoading: false
        })
      })
  }

  // `render` é o único método que é obrigatório ser definido
  // quando extendemos a classe `Component`.
  render () {
    // Poderíamos exibir algum tipo de <Spinner /> aqui.
    if (this.state.isLoading) {
      return <strong>Loading Posts...</strong>
    }

    // Agora exibiremos a listagem de posts.
    // No JSX nós podemos retornar um Array de elementos.
    // É isso que nós estamos fazendo com o this.state.posts.
    return (
      <ul>
        {this.state.posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    )
  }
}
