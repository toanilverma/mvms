import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header'
import Home from './home'
import About from './about'
import Contact from './contact'
import Footer from './footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
  

  render(){
    return (
      <div className="App">
      <Router>      
        <Header />         
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Router>
      <Footer /> 
      </div>
    );
  }
  }
  

export default App;
