import React, {Component} from 'react';
import {Greet} from './container/Greet';
export class App extends Component{
  constructor(props){
    super(props);  // props ={};
    this.props = props;
    console.log('Rec Props from index js ',props);
  }
  render(){
    return(
      <div>
      <p>Name is {this.props.name}</p>
      <Greet/>
      </div>
     
    )
  }
}