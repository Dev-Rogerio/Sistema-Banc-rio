import React, { useState } from "react";


import Del from "../Img/delete.png";
import Edite from "../Img/Edite.png";




import "../Formulario/formulario.css";






function Formulario() {
  return (
    <>
      <container className="conteinner-formulario">
        <header>
          <div className="vlzm">VLZM</div>
          <h2 className="sair_saldo">Sair </h2>
        </header>


        <aside className="aside-lancamento">
          <form action="">
            <div className="card-lanc">


                <tr>
                    <td></td>
                    <td>Agencia</td>
                    <td>Conta</td>
                    <td>Data</td>
                    <td>Transação</td>
                    <td>Deposito</td>
                    <td>
                        <img src={Del} alt="" />
                        <img src={Edite} alt="" />
                    </td>
                </tr>
              
                            
            </div>
          </form>
        </aside>

       

        <footer className="footer_disponivel">
          @VLZM todos os direitos reservados
        </footer>
      </container>
    </>
  );
}
export default Formulario;
