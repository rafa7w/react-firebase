import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      senha: ''
    }

    this.submit = this.submit.bind(this)
  }

  muda(event) {
    let state = this.state
    let element = event.target.getAttribute('name')
    if (element == 'email') {
      state.email = event.target.value
      this.setState(state)
    } else if (element == 'senha') {
      state.senha = event.target.value
      this.setState(state)
    }
  }

  async validacaoDados() {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, this.state.email, this.state.senha)
      .then(userCredential => {
        const user = userCredential.user
        return user
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        return false
      })
  }

  submit() {
    if (this.state.email == '' || this.state.senha == '') {
      alert('Email ou senha inválido. Tente novamente!')
    } else {
      if (this.validacaoDados()) {
        window.location.replace("http://localhost:3000/telainicial")
      } else {
        alert("Usuário não cadastrado!")
      }
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Tela de Login</h1>
        <input
          name="email"
          autoFocus
          placeholder="Email"
          type="email"
          onChange={e => this.muda(e)}
        />
        <input
          name="senha"
          placeholder="Senha"
          type="password"
          onChange={e => this.muda(e)}
        />
        <div className="buttons">
          <Link to="/">
            <button className="back">Voltar</button>
          </Link>
          <button className="submit" onClick={this.submit}>
            Entrar
          </button>
        </div>
      </div>
    )
  }
}

export default Login
