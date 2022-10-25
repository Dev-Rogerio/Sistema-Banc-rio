import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./style.css";



import Logar from "./Componentes/Logar/logar.jsx";
import Inicio from "../src/Componentes/Inicio/inicio.jsx";
import Consulta from '../src/Componentes/Consulta/consulta.jsx';
import Saldo from '../src/Componentes/Saldo/saldo.jsx';
import Disponivel from '../src/Componentes/Disponivel/disponivel.jsx';
import Lancamento from '../src/Componentes/Lancamento/lancamento.jsx';
import Registrar from '../src/Componentes/Registrar/registrar.jsx';
import Cadastrar from '../src/Componentes/Cadastrar/cadastrar.jsx';
import Formulario from '../src/Componentes/Formulario/formulario.jsx'



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Logar />} />
        <Route path="/registrar" element={ <Registrar />} />
        <Route path="/init" element={<Inicio />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/saldo" element={<Saldo />} />
        <Route path="/disponivel" element={<Disponivel />} />
        <Route path="/lancamento" element={ <Lancamento />} />     
        <Route path="/cadastrar" element={ <Cadastrar />} />
        <Route path="/formulario" element={ <Formulario />} />
     </Routes>
     </Router>

  );
}
export default App;
