
import './App.css';
import {Sidebar, CirlceTest, ViewContainer} from './components';
import Navbar from './components/Navbar/Navbar.js' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './pages/HomePage/Home';
import { Footer } from './components';
import { Cssplus, SidebarName } from "./pages/HomePage/Data";
import Bg from './components/BgVideo/Bg';
 
 

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar {...SidebarName}/>
      <Bg />
      <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/view' component={ViewContainer} />
      </Switch>
  
      <Footer/>
    </Router>
     
     
  );
}

export default App;
