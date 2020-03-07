import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import {Footer} from './components/Footer';
import './App.css';
function App(){
  let result = sum();
  return (<div>
    <h1 className='red'>Hello React {result}</h1>
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