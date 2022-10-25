import React, { useState } from "react";



import { Link } from 'react-router-dom';
import "../Disponivel/disponivel.css";




const disponivel = () => {

  

  return (
    <containner className="containner_disponivel">
      <header>
        <div className="vlzm">VLZM</div>
        <h2 className="sair_saldo"> <Link to="/"> Sair </Link></h2>
      </header>

      <aside className="tela_disponivel">
        <main className="main_disonivel">
          <div className="h1_saldo">Saldo</div>
          <div className="menu_disponivel">
            <ul>
              <li>extrato</li>
              <li>Saldo em conta</li>
              <li>Bloqueado</li>
              <li>Por período</li>
            </ul>
          </div>
          <div className="saldo_disponivel">
            <ul>
              <li>Agêcia</li>
              <li>Conta</li>
              <li className="saldo_disp">Saldo disponivel</li>
              <li className="total">Total</li>
            </ul>
          </div>
          <div className="descricao"></div>
         
        </main>
      </aside>

      <footer className="footer_disponivel">
        @VLZM todos os direitos reservados
      </footer>
    </containner>
  );
}

export default disponivel;
