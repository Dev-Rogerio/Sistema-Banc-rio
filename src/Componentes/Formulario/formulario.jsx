import React, { useState } from "react";

import Del from "../Img/delete.png";
import Edite from "../Img/Edite.png";

import "../Formulario/formulario.css";

function Formulario() {
  


  function buttonCadastrar(e) {
    e.preventDefault()

    var id = document.querySelector('.id_form');
    var agencia = document.querySelector(".agencia-form");
    var conta = document.querySelector(".conta-form");
    var date = document.querySelector(".date-form");
    var descricao = document.querySelector(".descricao-form");
    var valor = document.querySelector(".valor-form");
    var res = document.querySelector(".res_form");
    // var delete = document.querySelector('.delete_form');
    var edite = document.querySelector('.edite_form')

      
      // 1º Deixar a tabela fixa na tela ok
      // 2º padronizar as linhas e bordas da tabela ok
      // 3º Outra forma de inserir tabela no html para o  codigo não ficar tão grande.l ok
      // 4º limpar ok
      // 5º deixar o codigo do id fixo no input Id  ok    
      // 6º quando digitar apagar mensagem deresposta 
      // 8° tira duvida array valores para que serve ok
      // 7ª como funciona o onChange
      // operador Spread 
      // Barra de rolagem na tabela
      // Editar
      // Apagar
      // Modal
      

    if (agencia.value === "") {
      res.innerHTML = "Favor preencher todos os campos";
      document.querySelector(".agencia-form").focus();
    } else if(conta.value ==="" && conta.value.length <= 8){
      res.innerHTML = "A conta precisa ser maior ou igual a 4 digitos"
      document.querySelector(".conta-form").focus();
    } else if(date.value =="") {
      res.innerHTML = "Informe a data"
      document.querySelector(".date-form").focus();
    } else if (descricao.value =="") {
      res.innerHTML = "O campo descrição precisa ser preenchido"
      document.querySelector('.descricao-form').focus();
    } else if (valor.value =="") {
    res.innerHTML = "Insira um valor"
    document.querySelector(".valor-form").focus(); 

    } else {
      Limpar()
      setResul({
        id: Number(id.value)+1,
        agencia: "",
        conta: "",
        date: "",
        descricao: "",
        saldo: "",
        valor: "",

      })
    }
  }

  


  const [resultado, setResultado] = useState([]);
  const [resul, setResul] = useState({
    id: 0,
    agencia: "",
    conta: "",
    date: "",
    descricao: "",
    saldo: "",
  });


  const Limpar = () => {
    console.log(resul)

    setResultado([resul, ...resultado])
    setResul({
      id: "",
      agencia: "",
      conta: "",
      descricao: "",
      saldo: "",
    })

  }
  const Delete = (id) => {
    const resultadoFiltrado = resultado.filter((item) => item.id!=id)
    setResultado(resultadoFiltrado)
  }
  const Editar = () =>{
    
    window.location.href = "http://localhost:3000/modal"
  
  }

  

  return (
    <>
      <container className="conteinner-formulario">
        <header>
          <div className="vlzm">VLZM</div>
          <h2 className="sair_saldo">Sair </h2>
        </header>

        <div className="fundo_form">
          <div className="container_form">
            <div className="insid">
              <label htmlFor="" className="l_id-form label_form">
                Id
              </label>
              <input value={resul.id} type="number" className="id_form input_form" />
            </div>

            <div className="inside">
              <label htmlFor="" className="l_agencia-form label_form">
                Agência
              </label>
              <input
                type="number"
                className="agencia-form input_form"
                placeholder="Digite a agêndia"
                value={resul.agencia}
                onChange={(e) => {
                  setResul({
                    ...resul,
                    agencia: e.target.value
                  });
                }}
              />
            </div>

            <div className="inside">
              <label htmlFor="" className="l_conta-form label_form">
                Conta
              </label>
              <input
                type="number"
                className="conta-form input_form"
                placeholder="Digite a conta"
                value={resul.conta}
                onChange={(e) => {
                  setResul({
                    ...resul,
                    conta: e.target.value
                  });
                }}
              />
            </div>

            <div className="inside">
              <label htmlFor="" className="l_date-form label_form">
                Data
              </label>
              <input
                type="date"
                className="date-form input_form"
                placeholder="Informe a data"
                value={resul.date}
                onChange={(e) => {
                  setResul({
                    ...resul,
                    date: e.target.value,
                  });
                }}
              />
            </div>

            <div className="inside">
              <label htmlFor="" className="l_descricao-form label_form">
                Descrição
              </label>
              <input
                type="text"
                className="descricao-form input_form"
                placeholder="descrição"
                value={resul.descricao}
                onChange={(e) => {
                  setResul({
                    ...resul,
                    descricao: e.target.value,
                  });
                }}
              />
            </div>
            <div className="inside">
              <label htmlFor="" className="l_valor-form label_form" label_form>
                Valor
              </label>
              <input
                type="number"
                className="valor-form input_form"
                placeholder="Credito"
                value={resul.saldo}
                onChange={(e) => {
                  setResul({
                    ...resul,
                    saldo: e.target.value,
                  });
                }}
              />
            </div>
            <div className="button_form">
              <div className="res_form"></div>
              <button className="cadastrar_form" onClick={buttonCadastrar}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
        
        <thead>
          <table>
            <tr>
              <th className="id_table" >Id</th>
              <th className="agencia_table">Agência</th>
              <th className="conta_table" >Conta</th>
              <th className="data_table" >Data</th>
              <th className="descricao_table" >Descrição</th>
              <th className="saldo_table" >Saldo</th>
              <th className="acao_table" >Ações</th>
            </tr>
            {resultado.map((item) => (
              <tr key={item.id} >
              <td>{item.id}</td>
              <td>{item.agencia}</td>
              <td>{item.conta}</td>
              <td>{item.data}</td>
              <td>{item.descricao}</td>
              <td>{item.saldo}</td>
              <td>
                <img className=" delete_form" src={Del} onClick={() => Delete (item.id)} alt="" />{" "}
                <img className="edite_form" src={Edite} onClick={Editar} alt="" />              
              </td>
            </tr>

            ) )}          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item) => (
              <tr key={item} >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <img className=" delete_form" src={Del}  alt="" />{" "}
                <img className="edite_form" src={Edite} onClick={Editar} alt="" />              
              </td>
            </tr>

            ) )}          
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item) => (
              <tr key={item} >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <img className=" delete_form" src={Del}  alt="" />{" "}
                <img className="edite_form" src={Edite} onClick={Editar} alt="" />              
              </td>
            </tr>

            ) )}          
         
           
          </table>
        </thead>

        <footer className="footer_formulario">
          @VLZM todos os direitos reservados
        </footer>
      </container>



       {/* MODAL */}

       <div id="modal-promocao" className="modal-container">
        <div className="modal">
          <button className="fechar">X</button>
          <div className="id-Mmodal">
            <label htmlFor="l_id-modal " className="l-modal">
              Id
            </label>
            <input className="id-modal i-modal" type="text" />
          </div>

          <div className="agencia-Modal">
            <label htmlFor="l_agencia-modal" className="l-modal">
              Agência
            </label>
            <input className="agencia-modal i-modal" type="text" />
          </div>

          <div className="conta-Modal">
            <label htmlFor="l_conta-modal" className="l-modal">
              Conta
            </label>
            <input className="conta-modal i-modal" type="text" />
          </div>

          <div className="data-Modal">
            <label htmlFor="l_data-modal" className="l-modal">
              Data
            </label>
            <input className="data-modal i-modal" type="text" />
          </div>

          <div className="descricao-Modal">
            <label htmlFor="l_descricao-modal" className="l-modal">
              Descrição
            </label>
            <input className="descricao-modal i-modal" type="text" />
          </div>
          <div className="saldo-Modal">
            <label htmlFor="l_saldo-odal" className="l-modal">
              Saldo
            </label>
            <input className="saldo-modal i-modal" type="text" />
          </div>

          <div className="botao">
            <button id="clear" className="limpar-modal" onClick={''}>
              Limpar
            </button>
            <button id="save" className="salvar-modal" onClick={''}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Formulario;
