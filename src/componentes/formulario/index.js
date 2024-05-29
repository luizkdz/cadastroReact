import { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../campoTexto/"
import { ListaSuspensa } from "../listaSuspensa";
import './formulario.css';


export const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome:nome,
            cargo:cargo,
            imagem:imagem,
            time:time
        })
        
    }
    return(
        <div className="formulario">
            <form onSubmit={aoSalvar} className="campos-form">
                <h2>Preencha os dados para criar o card do formulário</h2>
            <CampoTexto valor = {nome} aoAlterado={setNome}obrigatorio={true} label="Nome"/>
                <CampoTexto aoAlterado={setCargo} obrigatorio={true} label= "Cargo"/>
                <CampoTexto aoAlterado={setImagem} label= "Imagem"/>
                <ListaSuspensa valor = {time} aoAlterado = {setTime} itens={props.times}/>
                <Botao texto="Criar Card"/>
            </form>
        </div>
    )
}