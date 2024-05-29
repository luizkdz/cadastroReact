import { useState } from 'react';
import './campoTexto.css';




export const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}
        return(
            <div className = "label-texto">
                <label className="label">{props.label}</label>
                <input value={props.estado} onChange={aoDigitado} required={props.obrigatorio}type = "text"/>
            </div>
        )
}