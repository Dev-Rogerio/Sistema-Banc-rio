import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../Registrar/registrar.css";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

//================================================================

function Registrar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const ema = window.document.querySelector(".email");
  const res = window.document.querySelector(".res");
 

  function isValid(e) {
    const validate = e.includes("@") && e.includes(".");
    return validate;
  }

  // if(ema.value === "") {}
  //   res.innerHtml = "Preenche os campos corrretamente";
  //   res.setAttribute("style", "display", "block");
  
  // } else if (!isValid(ema.value)) {
  //   res.innerHtml = "[ error ]";
  // }
  //===========================================================================
  return (
    <>
      <containner className="registar">
        <header className="header_registrar">
          <div className="vlzm">VLZM</div>
        </header>
        <div className="login">
          <div className="login-right">
            <h2>Acessar a conta</h2>

            <div className="Login-LoginInputEmail">
              <MdEmail />
              <input
                type="email"
                placeholder="Digite um email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="Login-LoginInputPassword">
              <MdLock />
              <input
              className="senha"
                type={show ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login-eye">
                {show ? (
                  <HiEye size={20} onClick={handleClick} />
                ) : (
                  <HiEyeOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <button type="submit">Entrar</button>

            <div className="res"></div>

            <div>
              <hr></hr>
            </div>
            <h4>Não tenho conta! Registrar</h4>
            <Link to="/cadastrar">
              {" "}
              <button type="submit">Cadastrar</button>{" "}
            </Link>
          </div>
        </div>{" "}
        <footer className="footer_login">
          @VLZM todos os direitos reservados{" "}
        </footer>{" "}
      </containner>
    </>
  );
}
export default Registrar;
