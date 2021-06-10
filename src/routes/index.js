import { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom";

import Login from "../pages/Login"
import Home from "../pages/Home"

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const token = window.localStorage.getItem("authToken");

    useEffect(() => {
        if (token) {
            setIsAuthenticated(token);
        }
    }, [token]);


    return (
        <>
            <Switch>
                {
                    isAuthenticated ?
                        <Route path="/home" component={Home}/> 
                    :
                        <Route path="/" component={Login}/>
                }
            </Switch>
        </>
    )
}

export default Routes
