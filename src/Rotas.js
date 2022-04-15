import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import TelaInicial from './components/TelaInicial'
import NotFound from './components/NotFound'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/cadastro" element={<Cadastro />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/telainicial" element={<TelaInicial />} />
        <Route exact={true} path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
