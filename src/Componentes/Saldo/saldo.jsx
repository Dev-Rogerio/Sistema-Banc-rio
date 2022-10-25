import React from "react";
import { Link } from "react-router-dom";

import "../Saldo/saldo.css";

function Saldo() {
  return (
    <>
      <containner className="containner_saldo">
        <header>
          <div className="vlzm">VLZM</div>
          <h2 className="sair_saldo">Sair</h2>
        </header>


      

        <div className="fundo">
          <aside>
            <h1 className="nove" >MEUS lançamentos</h1>
          </aside>

          <section className="section1">
          <Link to="/disponivel"><h1 className="saldodisponivel">Saldo disponível</h1></Link>
          
          <h3 className="saldoconta">Saldo em conta</h3>
          </section>
          <section className="section2">
            <ul>
              <li className="ag">Agência</li>
              <li className="co">Conta</li>
            </ul>
            </section>

          <section className="section3">section3</section>
        </div>

        <footer className="footer_saldo">
          @VLZM todos os direitos reservados
        </footer>
    

      </containner>
    </>
  );
}

export default Saldo;
