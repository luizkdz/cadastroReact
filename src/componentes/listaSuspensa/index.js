export const ListaSuspensa = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value = {props.valor}>
                         <option>Escolha uma opcao</option>
                         {props.itens.map(item => {
                            return <option key={item}>{item}</option>
                         })}
                </select>
        </div>
    )
}