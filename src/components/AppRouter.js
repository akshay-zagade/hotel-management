import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MenuBar from './MenuBar'
import Rooms from './Room'
import Overview from './Overview'
import Photos from './Photos'

function AppRouter() {
    return (
        <Router>
            <MenuBar/>
            <Switch>
                <Route path="/" exact component={Overview} />
                <Route path="/rooms" component={Rooms} />
                <Route path="/photos" component={Photos} />
            </Switch>
        </Router>
    )
}

export default AppRouter
