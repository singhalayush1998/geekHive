import React from 'react'
import {Switch, Route} from "react-router-dom"
import Dashboard from '../component/publicDashboard/dashboard'
import PublicDashboard from '../component/publicRoomDashboard/Publicdashboard'
import { Landing } from '../Components/Landing/Landing'
import { Navbar } from '../Components/Navbar/Navbar'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                {/* <Navbar/>
                <Landing/> */}
                <PublicDashboard/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
        </Switch>
    )
}

export {Routes}
