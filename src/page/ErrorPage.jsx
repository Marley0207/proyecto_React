import { useRouteError } from "react-router-dom";

 export function ErrorPage() {
    const error = useRouteError();
    const alertStyle = {
            margin:"100px"
    };
    return(
        <div id="error-page">
            <div class="alert alert-danger" role="alert" style={alertStyle}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has ocurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
 }