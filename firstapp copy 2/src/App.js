import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import {Footer} from './components/Footer';
import './App.css';
function App(){
  var counter = 10;
  var style = {
    backgroundColor:'cyan',
    color:'orange'
  }

   var classValue = 'red';
  let result = sum();
  return (<div>
    <h2 style={style}>Style Demo</h2>
    <h1 className={counter>10?'red':'green'}>Hello React {result}</h1>
    <Header/>
    <Section/>
    <Footer/>
    </div>);
}
export default App;
function sum(){
  var x = 100;
  var y = 200;
  var z = x + y;
  return z;
}