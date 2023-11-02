import { Favorito } from "./Favorito";

export function FilterButton  (props)  {
  return (
    <div>
        <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Favoritos</button>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">{props.nombreLocal} / Carros Favoritos</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr/>
            <div className="offcanvas-body">
                {
                  props.favoritas.map((element) =>(
                    <Favorito value={element} removeFavorite={props.removeFavorite} />
                  ))
                }
            </div>
        </div>
    </div>
  )
}
