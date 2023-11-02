
import { CarContext } from "../App";
import "../Css/CarroCard.css"
import { InformacionCarro } from "./InformacionCarro"
import { useContext } from "react";

export function CarroCard (props) {

    const carContext = useContext(CarContext);
    const alertStyle = {
        margin:"10px",
        display:"flex",
        width:"80%",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
        fontSize: "18px"
    };
    return( 
        <>
        {carContext.isNombreLocalClicked ? (
            <div class="alert alert-dark" role="alert" style={alertStyle}>
                <a>¡Bienvenido a AutoTraderNic.com! 
                    Explora la mejor selección de vehículos en Nicaragua con nosotros. 
                    Descubre una amplia gama de autos nuevos y usados de las principales marcas. 
                    Desde elegantes sedanes hasta robustas camionetas, tenemos el vehículo perfecto para ti. 
                    Navega por nuestro sitio fácil de usar, encuentra ofertas exclusivas y haz realidad el 
                    sueño de tener tu propio carro. ¡AutoTraderNic.com, donde empieza tu viaje en cuatro ruedas! 
                    Visítanos en Av. Motorizadas 123, Managua, Nicaragua.</a>
                <img src="https://img.freepik.com/vector-premium/diseno-coche-velocidad-roja-diseno-vector-automovil_6689-410.jpg?w=996" width="180px" height="160px"/>
            </div>
        ) : null}
            <div className="card-container">
                {
                    props.value.map((value) => (
                        <InformacionCarro value={value} addFavorite={props.addFavorite}/>
                    ))
                }
            </div>
        </>
    )
}