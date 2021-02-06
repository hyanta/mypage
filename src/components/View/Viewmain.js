import React from 'react'
 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import ViewNavbar from '../Navbar/ViewNavbar'
import Phome from '../../pages/HomePage/Phome'
import Company from './container/Company'

const Viewmain = () => {
    return (
        <Router>
          
              <ViewNavbar/>
            <Switch>

                   <Route path='/view' exact  component={Phome} />
                   <Route path='/view/company' component={Company} />
              
              
            </Switch>
        </Router>
    )
}

export default Viewmain
