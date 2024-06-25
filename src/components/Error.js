import {useRouteError} from "react-router-dom";

const Error=()=>
    {
        const error=useRouteError();
        console.log(error);
        return (
            <div>
                <h1>Oops!!</h1>
                <h2>{error.data}</h2>
                <h3>{"Status "+error.status}</h3>
                <h3>Status Text :{error.statusText}</h3>
                
            </div>
        )
    }


export default Error;