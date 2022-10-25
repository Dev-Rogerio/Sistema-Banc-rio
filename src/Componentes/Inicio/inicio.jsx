import React from "react";
import { Link } from "react-router-dom";

import '../Inicio/inicio.css';
import Extrato from "../Img/extrato.svg";
import Cifrao from "../Img/cifrao.svg";



function inicio() {
  return (
    <>
      <containner className="containner_inicio">
        <header className="header_login">
          <div className="vlzm">VLZM</div>
        </header>

        <aside className="screen_principal">
          <main className="main_inicio">
            <div className="card_extrato">
              <img className="ico_extrato" src={Extrato} alt="" />
              <p className="p_extrato">Consultar Extrato</p>

              <Link to="/consulta">
                <p className="p_periodo">Consultar por período</p>
              </Link>
            </div>

            <div className="card_saldo">
              <img className="ico_saldo" src={Cifrao} alt="" />
              <p className="p_saldo">Saldo em conta</p>
              <p className="p_disponivel">Saldo disponivel</p>
              <p className="p_bloqueado">Saldo bloqueado</p>
            </div>
          </main>
        </aside>

        <footer className="footer_login">
          @VLZM todos os direitos reservados
        </footer>
      </containner>
    </>
  );
}

export default inicio;
