
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './pages/HomePage/Home';
import { Footer, Sidebar } from './components';
import Phome from './pages/HomePage/Phome';
import Viewmain from './components/View/Viewmain';
import Company from './components/View/container/Company';
import { SidebarName } from './pages/HomePage/Data';
 
 

function App() {
  return (
    <Router>
       
     
      
      <Switch>
        
         <Route path='/' exact component={Home} />
         <Route path='/view' component={Viewmain} />
          
      </Switch>
  
      <Footer/>
    </Router>
     
     
  );
}

export default App;
