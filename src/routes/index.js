import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Login from '../pages/Login'
import Home from '../pages/Home'

const Routes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <>
            <Switch>
                    <Route path='/home' component={Home}/>
                    <Route exact path='/' component={Login}/>
            </Switch>
        </>
    )
}

export default Routes
