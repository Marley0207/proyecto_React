import { useState } from "react";

export const InformacionCarro = (props) => {
    const imageStyle = {
      width:"100%",
      height:"300px"
    }
    const verMasButtonStyle = {
      margin: "0px 10px 10px 10px"
    }
    const descripcionStyle ={
      textAlign:"center"
    }
    
    const [verMas, setVerMas] = useState(false);

    let buttonFavorite = <button
                  onClick={() => props.addFavorite(props.value)}
                  type="button" className="btn btn-outline-light" style={verMasButtonStyle}>Favorita
                  </button>;

    let sectionVerMas = <a onClick={() => setVerMas(true)} type="button">
    <img src={props.value.Imagen} className="card-img-top" alt="..." style={imageStyle}/>
  </a>;
                  
    if(verMas){
      sectionVerMas = <a onClick={() => setVerMas(false)} type="button" style={descripcionStyle}>
        {props.value.Descripcion}
        <hr/>
      </a>;
    } 
    return (
      <div className="card text-bg-dark mb-3">
          {sectionVerMas}
          <div className="card-body">
              <h5 className="card-text">{props.value.Nombre}</h5>
              <p className="card-text">Precio: ${props.value.Precio}</p>
          </div>
          {buttonFavorite}
      </div>
    )
  }
  