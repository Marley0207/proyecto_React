import './App.css';
import { NavBar } from './components/NavBar';
import { CarroCard } from './components/CarroCard';
import  React, { useState } from 'react';
import { datosCarro } from './data/Carros';
import { Outlet } from 'react-router-dom';

export const CarContext = React.createContext();  

function App() {
  
  const [isNombreLocalClicked, setIsNombreLocalClicked] = useState(false);
  const handleButtonNombreLocal = () => {
      setIsNombreLocalClicked(!isNombreLocalClicked);
  };

  function addCarToFavorites(element) {
    if(listaCarrosFavoritos.find((car) => car.Id === element.Id)){
      console.log("Carro repetido");
      return;
    }

    let tempListaFavorito = [...listaCarrosFavoritos];
    tempListaFavorito.push(element);
    setListaCarrosFavoritos(tempListaFavorito);
  }

  const [listaCarros, setListaCarros] = useState(datosCarro);
  const [listaCarrosFavoritos, setListaCarrosFavoritos] = useState([]);

  function removeCarToFavorites(element) {
    const updatedFavoritos = listaCarrosFavoritos.filter(
      (carro) => carro.Id !== element.Id
    );
    setListaCarrosFavoritos(updatedFavoritos);
  }
  function addNewCar(element){
    setListaCarros([...listaCarros, element])
  }
  return (
    <div>
      <CarContext.Provider value={{handleButtonNombreLocal , isNombreLocalClicked, listaCarros,addCarToFavorites}}>
        <NavBar 
          nombreLocal="AutoTrader" 
          elements={listaCarrosFavoritos} 
          removeFavorite={removeCarToFavorites}
          NewCar={addNewCar}
          value={listaCarros}
        />
        <Outlet />
      </CarContext.Provider>
    </div>
  );
}

export default App;
