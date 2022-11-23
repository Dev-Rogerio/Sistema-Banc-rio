import React from "react";

import "../Modal/modal.css"


const Modal = () => {
    return(
        <> 

        <div className="container">        
        <form action="form-modal" className="form-modal" >

            <div className="id-Mmodal">
                <label htmlFor="l_id-modal " className="l-modal">Id</label>
                <input className="id-modal i-modal" type="text" />
            </div>

            <div className="agencia-Modal">
                <label htmlFor="l_agencia-modal" className="l-modal">Agência</label>
                <input className="agencia-modal i-modal" type="text" />
            </div>

            <div className="conta-Modal">
                <label htmlFor="l_conta-modal" className="l-modal">Conta</label>
                <input className="conta-modal i-modal" type="text" />
            </div>

            <div className="data-Modal">
                <label htmlFor="l_data-modal" className="l-modal">Data</label>
                <input className="data-modal i-modal" type="text" />
            </div>

            <div className="descricao-Modal">
                <label htmlFor="l_descricao-modal" className="l-modal">Descrição</label>
                <input className="descricao-modal i-modal" type="text" />
            </div>
            <div className="saldo-Modal">
                <label htmlFor="l_saldo-odal" className="l-modal">Saldo</label>
                <input className="saldo-modal i-modal" type="text" />
            </div>

            <div className="botao">
            
            <button className="limpar-modal" >Limpar</button>
            <button className="salvar-modal" >Salvar</button>
            
            </div>
        </form>
        </div>
        </>
    )
}
export default Modal
