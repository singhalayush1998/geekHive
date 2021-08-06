import React from 'react'
import {Switch, Route} from "react-router-dom"
import { Landing } from '../Components/Landing/Landing'
import { Navbar } from '../Components/Navbar/Navbar'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <Landing/>
            </Route>
        </Switch>
    )
}

export {Routes}
