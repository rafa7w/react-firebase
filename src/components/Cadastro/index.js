import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../Firebase'
import { collection, addDoc } from 'firebase/firestore'

class Cadastro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
      dataNascimento: ''
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
    } else if (element == 'nome') {
      state.nome = event.target.value
      this.setState(state)
    } else if (element == 'sobrenome') {
      state.sobrenome = event.target.value
      this.setState(state)
    } else if (element == 'data-nascimento') {
      state.dataNascimento = event.target.value
      this.setState(state)
    }
  }

  async criarUsuario() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.senha
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async registerOtherInfos() {
    const uid = await auth.currentUser.uid
    const userCollectionRef = collection(db, 'usuarios')
    try {
      await addDoc(userCollectionRef, {
        uid: uid,
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      })
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  async submit() {
    if (
      this.state.email == '' ||
      this.state.senha == '' ||
      this.state.nome == '' ||
      this.state.sobrenome == '' ||
      this.state.dataNascimento == ''
    ) {
      alert('Preencha todos os campos!')
    } else {
      await this.criarUsuario()
      await this.registerOtherInfos()
      document.querySelectorAll('input').forEach(element => {
        element.value = ''
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Tela de Cadastro</h1>
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
        <input name="nome" placeholder="Nome" onChange={e => this.muda(e)} />
        <input
          name="sobrenome"
          placeholder="Sobrenome"
          onChange={e => this.muda(e)}
        />
        <input
          name="data-nascimento"
          placeholder="Data de Nascimento"
          type="date"
          onChange={e => this.muda(e)}
        />
        <div className="buttons">
          <Link to="/">
            <button className="back">Voltar</button>
          </Link>
          <button className="submit" onClick={this.submit}>
            Cadastrar
          </button>
        </div>
      </div>
    )
  }
}

export default Cadastro
