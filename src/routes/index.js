import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Login from '../pages/Login'

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    if (!isAuthenticated) {
        return (
            <>
                <Switch>
                    <Route exact path='/' component={Login}/>
                </Switch>
            </>
        )
    }
}

export default Routes
