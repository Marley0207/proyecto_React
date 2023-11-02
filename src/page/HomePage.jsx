import { CarContext } from "../App";
import { useContext } from "react";
import { CarroCard } from "../components/CarroCard";
export function HomePage() {

    const carContext = useContext(CarContext);

    return (
        <CarroCard 
                value={carContext.listaCarros} 
                addFavorite={carContext.addCarToFavorites} 
        />
    );
}