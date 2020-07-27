import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './landingpage'

import Resume from './resume'
import Contacts from './contacts'
import About from './about'
import Projects from './projects'

const Main = () => 
    <Switch>
        <Route exact path= "/" component= {LandingPage} />
        <Route  path= "/resumo" component= {Resume} />
        <Route  path= "/contatos" component= {Contacts} />
        <Route  path= "/sobre" component= {About} />
        <Route  path= "/projetos" component= {Projects} />

    </Switch>

export default Main