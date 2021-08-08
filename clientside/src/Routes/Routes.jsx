import React from 'react'
import {Switch, Route} from "react-router-dom"
import Dashboard from '../component/publicDashboard/dashboard'
import PublicDashboard from '../component/publicRoomDashboard/Publicdashboard'
import { Landing } from '../Components/Landing/Landing'
import { Login } from '../Components/Login/Login'
import { Navbar } from '../Components/Navbar/Navbar'
import { Signup } from '../Components/Sign up/signup'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar/>
                <Landing/>
                {/* <PublicDashboard/> */}
            </Route>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/room/:id">
                <PublicDashboard/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
               <Signup/>
            </Route>
        </Switch>
    )
}

export {Routes}
