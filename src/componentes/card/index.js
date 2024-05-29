import './card.css';
export const Card = (props) => {
    return(
        <div className="card">
            <div>
            <img src= {props.imagem} alt = "ícone imagem"/>
            </div>
            <div>
            <h3>{props.nome}</h3>
            <h4>{props.cargo}</h4></div>
        </div>
    )    
}