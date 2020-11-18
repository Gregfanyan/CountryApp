import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import SingleCountry from './pages/SingleCountry'
import CountryCart from './pages/CountryCart'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/TableRow/:id" component={SingleCountry} />
        <Route path="/cart" component={CountryCart} />
    </Switch>
)
export default Routes
