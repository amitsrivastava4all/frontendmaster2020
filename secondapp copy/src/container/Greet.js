import React , {Component} from 'react';
import {Input} from '../components/Input';
import {Actions} from '../components/Actions';
import {Output} from '../components/Output';
export class Greet extends Component{
    constructor(props){
        super(props);
        console.log("Now Props are ",props);
        this.nameObject = {};
        this.result = '';

    }
    getFullNameInTitleCase(){
        //this.result = 'ghjkdhgkfjh';
        console.log('Full Name is ');
    }
    titleCase(name){
        return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    }
    takeNames(obj){
        console.log("Take Names Rec Object ",obj);
       // this.nameObject = obj;
    }
    render(){
        // // Input(takeNames)
        return (
            <div>
            <h1> Greet App</h1>
           
            <Input  sendName = {this.takeNames}/>
            <Actions callFullName = {this.getFullNameInTitleCase}/>
            <Output result= {this.result}/>
          </div>
        )
    }

}