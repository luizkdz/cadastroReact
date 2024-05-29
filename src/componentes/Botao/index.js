export const Botao = (props) => {

    return(
        <div className = "div-botao">
            <button>
                {props.texto}
            </button>
        </div>
    )
}