import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import CountryCard from './CountryCard'
import TableRow from './components/TableRow/TableRow'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/" component={TableRow} />
    <Route path="/TableRow/:id" component={CountryCard} />
  </Switch>
)
export default Routes
