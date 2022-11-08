import React, { useState } from "react";

import "./lancamento.css";

function Lancamento() {
  const [resultado, setResultado] = useState([]);
  const [resul, setResul] = useState({
    id: 0,
    agencia: "",
    conta: "",
    data: "",
    transacao: "",
    deposito: "",
  });

  function Cadastrar(event) {
    var agencia = window.document.querySelector(".agencia");
    var conta = document.querySelector(".conta"); 
    var data = window.document.querySelector(".data");
    var transacao = window.document.querySelector(".tansacao");
    var deposito = window.document.querySelector(".deposito");
    var resultado = window.document.querySelector(".resLance");
    var caracter = /^[0-9]/;
    
    
    var caracteres = /[a-z]/;
    
    // "ABCDEFGHIJkLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú"; 

    if (agencia.value == '' ) {     
        resultado.innerHTML = "Preencher os campos vazios"    
        document.querySelector('.agencia').focus(); 
    } else if(conta.value == ""  && conta.value != caracteres){
      document.querySelector('.conta')
      resultado.innerHTML = 'Os campos precisa ser números e no minímo 4 digitos'
    } else if(data.value == "") {
      resultado.innerHTML = 'obrigatório'
    }

    event.preventDefault();
  }
 

  return (
    <>
      <containner className="containner_inicio">
        <header className="header_login">
          <div className="vlzm">VLZM</div>
        </header>
        <aside className="aside-lancamento">
          <form action="">
            <div className="card-lanc">
              <div className="d-id">
                <label className="l-id">Id</label>
                <input type="text" className="id" value={resul.id} />
              </div>
              <div className="d-agencia">
                <label className="l-agencia">Agência</label>
                <input min='5' max="10" required
                  type="text"
                  className="agencia"
                  value={resul.agencia}
                  onChange={(e) => {
                    setResul({
                      ...resul,
                      agencia: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-conta">
                <label className="l-conta">Conta</label>
                <input
                  type="text" 
                  value={resul.conta}
                  className="conta"
                  onChange={(e) => {
                    setResul({
                      ...resul,
                      conta: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-data">
                <label className="l-data">Data</label>
                <input
                  type="text"
                  value={resul.data}
                  className="data"
                  onChange={(e) => {
                    setResul({
                      ...resul,
                      data: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-transacao">
                <label className="l-transacao">Transação</label>
                <input
                  type="text"
                  value={resul.transacao}
                  className="transacao"
                  onChange={(e) => {
                    setResul({
                      ...resul,
                      transacao: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-deposito">
                <label htmlFor="" className="l-deposito">
                  Depósito
                </label>
                <input
                  type="text"
                  value={resul.deposito}
                  className="deposito"
                  onChange={(e) => {
                    setResul({
                      ...resul,
                      deposito: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="d-salvar">
                <button className="cadastrar" onClick={Cadastrar}>
                  Cadastrar
                </button>
                <button className="limpar">Limpar</button>
              </div>
            </div>
          </form>
          <div className="resLance"></div>
        </aside>
        <footer className="footer-lancamento">
          @VLZM todos os direitos reservados
        </footer>
      </containner>
    </>
  );
}
export default Lancamento;
