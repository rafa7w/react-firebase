import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../estilos/estilos.css'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../Firebase'
import { collection, getDocs } from 'firebase/firestore'

class TelaInicial extends Component {
  constructor(props) {
    super(props)
  }

  async logout() {
    await signOut(auth)
    window.location.replace('http://localhost:3000/')
  }

  async obterDados() {
    const user = await (
      await getDocs(collection(db, 'usuarios'))
    ).forEach(docs => {
      console.log(docs.data())
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Tela Inicial</h1>
        <div className="buttons">
          <button onClick={this.obterDados} className="submit">
            Obter info
          </button>
          <Link to="/">
            <button onClick={this.logout} className="back">
              Sair
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default TelaInicial
