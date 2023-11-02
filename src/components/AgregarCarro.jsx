import { useState } from "react"

export const AgregarCarro = (props) => {

    const [Nombre, setNombre] = useState("");
    const [Precio, setPrecio] = useState("");
    const [Imagen, setImagen] = useState("");
    const [Descripcion, setDescripcion] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.NewCar({
            'Nombre': Nombre,
            'Precio': Precio,
            'Imagen': Imagen,
            'Descripcion': Descripcion
        });
        setNombre("");
        setPrecio("");
        setImagen("");
        setDescripcion("");
    }

  return (
    <div>
        <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar</button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">{props.nombreLocal} / Agregar Dona</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr />
        <div className="offcanvas-body">
            <h3>Informacion del Carro</h3>
            <form className="row g-2" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-floating mb-3">
                    <input value={Nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Nombre</label>
                </div> 
                <div className="form-floating mb-3">
                    <input value={Precio} onChange={(e) => setPrecio(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Precio</label>
                </div> 
                <div className="form-floating mb-3">
                    <input value={Imagen} onChange={(e) => setImagen(e.target.value)} type="url" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Imagen Url</label>
                </div> 
                    <label>Descripcion</label>
                <div className="form-floating mb-3">
                    <textarea value={Descripcion} onChange={(e) => setDescripcion(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                </div> 
                <button type="submit" className="btn btn-primary">Agregar un Carro</button>
            </form>
        </div>
        </div>
    </div>
  )
}
