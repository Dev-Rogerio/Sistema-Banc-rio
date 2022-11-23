import React, { useState } from "react";

import "../Tabela/tabela.css";

import imgA from "../Img/delete.png";
import imgB from "../Img/Edite.png";

const Tabela = () => {
  return (
    <>
      <thead>
        <table>
          <tr>
            <th>Id</th>
            <th>Agência</th>
            <th>Conta</th>
            <th>Data</th>
            <th>Descrição</th>
            <th>Saldo</th>
            <th>Ações</th>
          </tr>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((percorre) => (
            <tr key={percorre}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>             
            </tr>
          ))}
        </table>
      </thead>

      {[1,2,3,4,5,6,7].map((i) => (
        <img key={i} src={imgA} alt="" />
      ))}
    </>
  );
};

export default Tabela;
