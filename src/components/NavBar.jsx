import { CarContext } from "../App";
import { AgregarCarro } from "./AgregarCarro";
import { FilterButton } from "./FilterButton";
import { GaleriaCarros } from "./GaleriaCarros";
import { useContext } from "react";
import { Link } from "react-router-dom";
export function NavBar (props){

    const carContext = useContext(CarContext);

    const NavBarStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '15px'
    };
    return(
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
            <a className="navbar-brand" onClick={carContext.handleButtonNombreLocal} type="button">{props.nombreLocal}</a>
                <div style={NavBarStyle}>
                    <Link type="button" className="btn btn-primary" to={"/"}>Inicio</Link>
                    <Link type="button" className="btn btn-success" to={"/Json"}>Datos Json</Link>
                    <FilterButton 
                        nombreLocal={props.nombreLocal} 
                        favoritas={props.elements} 
                        removeFavorite={props.removeFavorite}
                    />
                    <GaleriaCarros 
                        nombreLocal={props.nombreLocal} 
                        value={props.value}
                    />
                    <AgregarCarro 
                        nombreLocal={props.nombreLocal} 
                        NewCar={props.NewCar}
                    />
                </div>
            </div>
        </nav>
    );
}