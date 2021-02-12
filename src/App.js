import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from './Context'
import Index from './components/layout/Index'
import Navbar from './components/layout/Navbar'

const App = () => {
    return (
        <Provider>
        <Router>
        <React.Fragment>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Index}/>
                </Switch>
            </div>
        </React.Fragment>
        </Router>
        </Provider>
    )
}

export default App
