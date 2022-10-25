import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./logar.css";
// import Use from "../Img/usuario2.svg";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventeDefaut();
    setShow(!show);
  };

  function Entrar() {
    var use = document.querySelector(".usuario");    
    var password = document.querySelector(".senha");
    var res = document.querySelector(".resLogar");

    function validarEmail(email) {
      const isValid = email.includes("@") && email.includes(".");
      return isValid;
    }

    if (use.value == "") {
      res.innerHTML = "Preencher os campos vazio";
      res.setAttribute("style", "display: block");
      document.querySelector(".usuario").focus();    

    } else if (!validarEmail(use.value)) {
      res.innerHTML = "[ error ] Formato não corresponde";
      res.setAttribute("style", "display: block");

    } else if (password.value == "") {
      res.innerHTML = "[ prencher o campo senha.]";
      document.querySelector(".senha").focus();
      res.setAttribute("style", "display: block");

    } else if (use.value) {
      window.location.href = "http://localhost:3000/init";
    }
  }
  return (
    <>
      <containner className="containner_login">
        <header className="header_login">
          <div className="vlzm">VLZM</div>
        </header>

        <aside className="screen_principal">
          <section className="cashier">
            <div className="acessar_conta">Acessar a Conta</div>

            {/* <img className="use_login" src={Use} alt="" /> */}

            <h1 className="l_usuario">
              Login: <MdEmail className="MdEmail-log" />
            </h1>
            <input
              type="text"
              className="usuario"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h1 className="l_senha">
              Senha: <MdLock className="MdLock-log" />
            </h1>
            <input
              className="senha"
              placeholder="Digite sua senha"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="resLogar"></div>

            <section className="entrar">
              {/* <Link to="/inicio"> */}

              <button onClick={Entrar} className="button_entrar">
                entrar
              </button>

              {/* </Link> */}
            </section>
            <div className="registre-se">
              {" "}
              Não tenho conta!{" "}
              <Link to="/cadastrar">
                {" "}
                <div className="reg"> CADASTRE-SE</div>
              </Link>{" "}

              
            </div>
          </section>
        </aside>

        <footer className="footer_login">
          @VLZM todos os direitos reservados
        </footer>
      </containner>
    </>
  );
};
export default Login;
