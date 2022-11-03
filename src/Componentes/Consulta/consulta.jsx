import React from "react";

import { Link } from "react-router-dom";

import "./consulta.css";

function Consulta() {
  return (
    <containner className="containner_inicio">
      <header className="header_inicio">
        <div className="vlzm_inicio">
          VLZM
        
        </div>
        <h2 className="h2_inicio">Sair</h2>
      </header>

      <aside className="tela_principal_consulta">
        <main className="main_consulta">
          <h1 className="h1_consulta">[ Filtro por período ]</h1>
          <div className="nav">
            <ul>
              <li>Resumo</li>
              <li>Saldo em conta</li>
              <li>Bloqueado</li>
              <li>Por período</li>
            </ul>
          </div>
          <div className="nav2">
            <ul>
              <li>Mensal</li>
              <li>/</li>
              <li>Período</li>
            </ul>
          </div>
          <div className="nav3">
            <div className="opcao">Seleciome uma opção desejada</div>
            <div className="periodo">Mensal / Período</div>

            <main className="maincunsulta">
              <section className="row5">
                <input id="r1" className="radio1" type="radio" />
                <label htmlfor="r1" className="l_radio1">
                  Por mês
                </label>
                <select className="selecione" type="">
                  <option value="">Janeiro</option>
                  <option value="">Janeiro</option>
                  <option value="">Fevereiro</option>
                  <option value="">Março</option>
                  <option value="">Abril</option>
                  <option value="">Maio</option>
                  <option value="">Junho</option>
                  <option value="">Julho</option>
                  <option value="">Agosto</option>
                  <option value="">Setembro</option>
                  <option value="">Outubro</option>
                  <option value="">Novembro</option>
                  <option value="">dezembro</option>
                </select>
              </section>

              <select type="text" className="ano">
                <option value="">ano</option>
                <option value="">2020</option>
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
              </select>

              <section className="row4">
                <input id="" className="radio2" type="radio" />
                <label htmlFor="r2" className="l_radio1">
                  A partir de:
                </label>

                <label className="separado1">/</label>
                <select type="select" className="dia1">
                  <option value="">dia</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                </select>

                <label className="separado2">/</label>
                <select type="text" className="mes1">
                  <option value="">mês</option>
                  <option value="">Janeiro</option>
                  <option value="">Fevereiro</option>
                  <option value="">Março</option>
                  <option value="">Abril</option>
                  <option value="">Maio</option>
                  <option value="">Junho</option>
                  <option value="">Julho</option>
                  <option value="">Agosto</option>
                  <option value="">Setembro</option>
                  <option value="">Outubro</option>
                  <option value="">Novembro</option>
                  <option value="">dezembro</option>
                </select>

                <select type="text" className="ano1">
                  <option value="">ano</option>
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                </select>

                <label className="ate">Até:</label>
                <select type="select" className="dia2">
                  <option value="">dia</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                  <option value="">11</option>
                  <option value="">12</option>
                  <option value="">13</option>
                  <option value="">14</option>
                  <option value="">15</option>
                  <option value="">16</option>
                  <option value="">17</option>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                  <option value="">26</option>
                  <option value="">27</option>
                  <option value="">28</option>
                  <option value="">29</option>
                  <option value="">30</option>
                  <option value="">31</option>
                </select>

                <label className="separado3">/</label>
                <select type="text" className="mes2">
                  <option value="">mês</option>
                  <option value="">Janeiro</option>
                  <option value="">Fevereiro</option>
                  <option value="">Março</option>
                  <option value="">Abril</option>
                  <option value="">Maio</option>
                  <option value="">Junho</option>
                  <option value="">Julho</option>
                  <option value="">Agosto</option>
                  <option value="">Setembro</option>
                  <option value="">Outubro</option>
                  <option value="">Novembro</option>
                  <option value="">dezembro</option>
                </select>

                <label className="separado4">/</label>
                <select type="text" className="ano2">
                  <option value="">ano</option>
                  <option value="">2020</option>
                  <option value="">2021</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                </select>
              </section>
            </main>
          </div>

          <Link to="/saldo">
            <button className="button_consultar">consultar</button>
          </Link>
        </main>
      </aside>

      <footer className="footer_login">
        @VLZM todos os direitos reservados.
      </footer>
    </containner>
  );
}
export default Consulta;
