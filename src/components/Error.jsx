
//react-router-dom
import { Navigate, useRouteError } from "react-router-dom";
//react-bootstrap
import { Button } from "react-bootstrap";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="container mt-5">
            <div className="alert alert-danger" role="alert">
                <h4>Something went wrong!</h4>
                <p>{error?.statusText || error?.message || "Page not found"}</p>
                <Button onClick={()=>Navigate("/")}> ← Back to Home</Button>
            </div>
        </div>
    );
};

export default Error;