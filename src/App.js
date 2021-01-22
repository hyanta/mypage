
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar/Navbar.js' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './pages/HomePage/Home';
import { Footer } from './components';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      
      <Switch>
        <Route path='/' exact component={ Home }/>
      </Switch>

      <Footer/>
    </Router>
     
     
  );
}

export default App;
