export function Favorito(props) {
    const textFavorito = {
        margin:"30px"
    }
    const buttonStyle = {

    }
    return(
        <div>
            <div className="alert alert-info p-0" role="alert">
                <img width="50px" src={props.value.Imagen} />
                <small style={textFavorito}>{props.value.Nombre}</small>
                <button type="button" style={buttonStyle} className="btn btn-danger" onClick={() => props.removeFavorite(props.value)}>Quitar</button> 
            </div>
        </div>
    );
}