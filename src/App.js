import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {ContextController} from './Context'
import Index from './components/layout/Index'
import Navbar from './components/layout/Navbar'
import Lyrics from './components/tracks/Lyrics'

const App = () => {
    return (
        <ContextController>
        <Router>
        <React.Fragment>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path='/lyrics/track/:id' component={Lyrics}/>
                </Switch>
            </div>
        </React.Fragment>
        </Router>
        </ContextController>
    )
}

export default App
