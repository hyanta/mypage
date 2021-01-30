
import './App.css';
import {Sidebar, CirlceTest} from './components';
import Navbar from './components/Navbar/Navbar.js' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './pages/HomePage/Home';
import { Footer } from './components';
import { Cssplus, SidebarName, viewImage } from "./pages/HomePage/Data";
import Bg from './components/BgVideo/Bg';
import Phome from './pages/HomePage/Phome';
 
 

function App() {
  return (
    <Router>
       
      <Sidebar {...SidebarName}/>
      <Bg />
      <Switch>
        
         <Route path='/' exact component={Home} />
         <Route path='/view' component={Phome} />
      </Switch>
  
      <Footer/>
    </Router>
     
     
  );
}

export default App;
