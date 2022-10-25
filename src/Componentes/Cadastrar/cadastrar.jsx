import React, { useState } from "react";

import { Link, useHref } from "react-router-dom";
import { useTheme } from "styled-components";

import "../Cadastrar/cadastrar.css";

function Cadastrar () {

  const [senha, setSenha] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false)
  

  function Clicar(e) {
    e.preventDefault();
    setShow(!show);
    var use = document.querySelector(".usuario_cadastrar");    
    var password = document.querySelector(".senha_cadastrar");
    var senha = document.querySelector(".confirmar_cadastrar");
    var res = document.querySelector(".resCadastrar");

    function validarEmail(email) {
      const isValid = email.includes("@") && email.includes(".") ;
      return isValid;
    }

    if (use.value == "") {
      res.innerHTML = "[ Preencher os campos vazio. ]";
      res.setAttribute("style", "display: block");     

    } else if (!validarEmail(use.value)) {
      res.innerHTML = "[error] O formato é diferente!  Ex: name@.com";
      res.setAttribute("style", "display: block");

    } else if (password.value.length <= 8) {
      res.innerHTML = "[ Preencher a senha no minímo 8 caracteres ]";      
      res.setAttribute("style", "display: block");

    }
    else if (password.value !== senha.value) {
      res.innerHTML = "A senha não corresponde";     
      res.setAttribute("style", "display: block");   
      
    }
    else {
      window.location.href = "http://localhost:3000/init";
    }
  }
  
  

  return (
    <>
      <containner className="containner_cadastrar">
        <header className="header_cadastrar">
          <div className="vlzm">VLZM</div>
        </header>

        <aside className="screen_cadastrar">
          <section className="cashier_cadastrar">
            <div className="acessar_conta_cadastrar">Crie sua Conta</div>

            <h1 className="l_usuario_cadastrar"> Usuário: </h1>
            <input
              className="usuario_cadastrar"
              placeholder="Digite seu e-mail"
            />

            <h1 className="l_senha_cadastrar">Senha </h1>
            <input type='password'value={senha} onChange={(e) => setSenha(e.target.value)} className="senha_cadastrar" placeholder="Digite sua senha" />

            <h1 className="l_confirmar_cadastrar">Confirmar Senha: </h1>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="confirmar_cadastrar" placeholder="Confirme sua senha" />

            <div className="resCadastrar" ></div>

           


            <section className="entrar">
              {/* <Link to="/inicio"></Link> */}
              <button   className="button_cadastrar" onClick={Clicar} >registar</button>             
            </section>
          </section>
        </aside>

        <footer className="footer_cadastrar">
          @VLZM todos os direitos reservados
        </footer>
      </containner>
    </>
  );
}
export default Cadastrar;
