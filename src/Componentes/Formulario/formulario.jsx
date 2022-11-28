import React, { useState } from "react";

import Del from "../Img/delete.png";
import Edite from "../Img/Edite.png";

import "../Formulario/formulario.css";
import { useHref } from "react-router-dom";

function Formulario() {
  function buttonCadastrar(e) {
    e.preventDefault();

    var id = document.querySelector(".id_form");
    var agencia = document.querySelector(".agencia-form");
    var conta = document.querySelector(".conta-form");
    var date = document.querySelector(".date-form");
    var descricao = document.querySelector(".descricao-form");
    var valor = document.querySelector(".valor-form");
    var res = document.querySelector(".res_form");
    // var delete = document.querySelector('.delete_form');
    var editando = document.querySelector(".edite_form");



    if (agencia.value === "") {
      res.innerHTML = "Favor preencher todos os campos";
      document.querySelector(".agencia-form").focus();
    } else if (conta.value === "" && conta.value.length <= 8) {
      res.innerHTML = "A conta precisa ser maior ou igual a 4 digitos";
      document.querySelector(".conta-form").focus();
    } else if (date.value == "") {
      res.innerHTML = "Informe a data";
      document.querySelector(".date-form").focus();
    } else if (descricao.value == "") {
      res.innerHTML = "O campo descrição precisa ser preenchido";
      document.querySelector(".descricao-form").focus();
    } else if (valor.value == "") {
      res.innerHTML = "Insira um valor";
      document.querySelector(".valor-form").focus();
    } else {
      Limpar();
      setResul({
        id: Number(id.value) + 1,
        agencia: "",
        conta: "",
        date: "",
        descricao: "",
        saldo: "",
        
      });
    }
  }
  const [aberto, setAberto] = useState(false);

  const [modalId, setModalId] = useState('');
  const [modalAgencia, setModalAgencia] = useState('');
  const [modalConta, setModalConta] = useState('');
  const [modalDate, setModalDate] = useState('');
  const [modalSaldo, setModalSaldo] = useState('');
  const [modalDescricao, setModalDescricao] = useState('');
  


  const [resultado, setResultado] = useState([]);
  const [resul, setResul] = useState({
    modalId: 0,
    modalAgencia: "",
    modalConta: "",
    modalDate: "",
    modalDescricao: "",
    modalSaldo: "",
  });

  const Limpar = () => {
    console.log(resul);

    setResultado([resul, ...resultado]);
    setResul({
      id: "",
      agencia: "",
      conta: "",
      descricao: "",
      saldo: "",
    });
  };

  const Save = () => {
    setResultado([{
      id: "",
      agencia: "",
      conta: "",
      date: "",
      decricao: "",
      saldo: "", 
    },...resultado]);
    setResul({
      id: "",
      agencia: "",
      conta: "",
      date: "",
      decricao: "",
      saldo: "",
    })
  }

  const Clear = () => {
    setResultado([resul, ...resultado]);
    setResul({
      id: "",
      agencia: "",
      conta: "",
      date: "",
      descricao: "",
      saldo: "",
    })
  }

  const Editar = (id) => {
    setAberto(true)
    const conta = resultado.find((item) => item.id === id)
    setModalId(conta.id);
    setModalAgencia(conta.agencia);
    setModalConta(conta.conta);
    setModalDate(conta.date);
    setModalSaldo(conta.saldo)
    setModalDescricao(conta.decricao);
  }

  const Fechar = () => {
    setAberto(false)

  }
 



  const Delete = (id) => {
    const resultadoFiltrado = resultado.filter((item) => item.id != id);
    setResultado(resultadoFiltrado);
  };

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
              <input
                value={resul.id}
                type="number"
                className="id_form input_form"
              />
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
                    agencia: e.target.value,
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
                    conta: e.target.value,
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
              <th className="id_table">Id</th>
              <th className="agencia_table">Agência</th>
              <th className="conta_table">Conta</th>
              <th className="data_table">Data</th>
              <th className="descricao_table">Descrição</th>
              <th className="saldo_table">Saldo</th>
              <th className="acao_table">Ações</th>
            </tr>
            {resultado.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.agencia}</td>
                <td>{item.conta}</td>
                <td>{item.date}</td>
                <td>{item.descricao}</td>
                <td>{item.saldo}</td>
                <td>
                  <img
                    className=" delete_form"
                    src={Del}
                    onClick={() => Delete(item.id)}
                    alt=""
                  />{" "}
                  <img className="edite_form" src={Edite} onClick={() => Editar(item.id)} alt="" />
                </td>
              </tr>
            ))}{" "}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <tr key={item}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <img className=" delete_form" src={Del} alt="" />{" "}
                  <img className="edite_form" src={Edite}  alt="" />
                </td>
              </tr>
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <tr key={item}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <img className=" delete_form" src={Del} alt="" />{" "}
                  <img className="edite_form" src={Edite}  alt="" />
                </td>
              </tr>
            ))}
          </table>
        </thead>

        <footer className="footer_formulario">
          @VLZM todos os direitos reservados
        </footer>
      </container>

      {/* MODAL */}

      <div id="modal-promocao modal-container"  className={aberto? 'mostrar modal-container' : 'modal-container'}>
        <div className="modal">
          <button className="fechar" onClick={Fechar}>X</button>
          <div className="id-Mmodal">
            <label htmlFor="l_id-modal " className="l-modal">
              Id
            </label>
            <input className="id-modal i-modal" value={modalId} type="text" />
          </div>

          <div className="agencia-Modal">
            <label htmlFor="l_agencia-modal" className="l-modal">
              Agência
            </label>
            <input className="agencia-modal i-modal" value={modalAgencia} onChange={(e) => setModalAgencia(e.target.value)} type="text" />
          </div>

          <div className="conta-Modal">
            <label htmlFor="l_conta-modal" className="l-modal">
              Conta
            </label>
            <input className="conta-modal i-modal" value={modalConta} type="text" />
          </div>

          <div className="data-Modal">
            <label htmlFor="l_data-modal" className="l-modal">Data</label>          
            <input className="data-modal i-modal" value={modalDate} type="text" />
          </div>

          <div className="descricao-Modal">
            <label htmlFor="l_descricao-modal" className="l-modal">
              Descrição
            </label>
            <input className="descricao-modal i-modal" value={modalDescricao} type="text" />
          </div>

          <div className="saldo-Modal">
            <label htmlFor="l_saldo-odal" className="l-modal">
              Saldo
            </label>
            <input className="saldo-modal i-modal" value={modalSaldo} type="text" />
          </div>

          <div className="botao">
            <button id="clear" className="limpar-modal" onClick={Clear}>
              Limpar
            </button>
            <button id="save" className="salvar-modal" onClick={Save}>
              Salvar
            </button>
          </div>
        </div>
        </div>
      
    </>
  );
}
export default Formulario;
