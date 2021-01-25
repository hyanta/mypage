
import './App.css';
import {Sidebar, CirlceTest} from './components';
import Navbar from './components/Navbar/Navbar.js' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './pages/HomePage/Home';
import { Footer } from './components';
import { Cssplus, SidebarName } from "./pages/HomePage/Data";
 

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar {...SidebarName}/>
      
      <Switch>
         <Route path='/' exact component={Home} />
        
      </Switch>
      <CirlceTest   {...Cssplus}/>
      <Footer/>
    </Router>
     
     
  );
}

export default App;
