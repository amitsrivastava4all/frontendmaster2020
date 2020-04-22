import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './ui/header';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import Error from './components/Error';
import Sports from './components/Sports';
import Login from './components/Login';
import MyComp from './components/MyComp';
import EnhanceComponent from './components/EnhanceComponent';
function App() {
  let isAuth = false;
  return (
    <div>
      <h2>Using HOC</h2>
      <MyComp c="10000" d="20000"/>
      <br/>
      <EnhanceComponent c="10000" d="20000"/>
      <br/>
    <h1>SPA Demo</h1>
    <Header isAuth={isAuth}/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about/:name/:job" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/sports" component={Sports}/>
      <Route path="/login" component={Login}/>
      <Redirect from="/new" to="/news"/>
      <Route path="/xyz" render={()=><h1>XYZ </h1>}/>
      <Route component={Error}/>
    </Switch>

    </div>
  );
}

export default App;
