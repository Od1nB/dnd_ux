import React from 'react'
import { Switch, Route } from 'react-router-dom'
import spellsPage from './spells.js';
import rere from './rere.js'
import './../css/main.css'

const Main = () => (
    <main className="main">
      <Switch>
        <Route exact path='/' component={rere}/>
        <Route path='/spells' component={spellsPage}/>
      </Switch>
    </main>
  )
  
  export default Main