import React from 'react';
import './background-time.css';
import { Card } from '../card';

export const BackgroundTime = (props) => {
    return (
        
        (props.colaboradores.length > 0) ? <div className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h2 style={{ backgroundColor: props.corPrimaria }}>Escola de {props.nome}</h2>
            {props.colaboradores.map(colaborador => <Card nome={colaborador.nome} key={colaborador.nome} cargo = {colaborador.cargo} imagem={colaborador.imagem}/>)}
        
        </div>
        : ""
    );
};