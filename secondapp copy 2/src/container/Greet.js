import React , {Component} from 'react';
import {Input} from '../components/Input';
import {Actions} from '../components/Actions';
import {Output} from '../components/Output';
export class Greet extends Component{
    constructor(props){
        super(props);
        console.log("Cons Call");
        console.log("Now Props are ",props);
        this.nameObject = {};
       // this.result = '';
        this.state = {result : ''};

    }
    componentWillMount(){
        console.log("Component Will Mount Call");
    }
    componentDidMount(){
        console.log("Component Did Mount Call");
    }
    getFullNameInTitleCase(){
        //this.result = 'ghjkdhgkfjh';
        console.log('Full Name is ', this.nameObject);
        var fullName = this.titleCase(this.nameObject.first)+" "+this.titleCase(this.nameObject.last);
        console.log('Full Name is ',fullName);
        
        this.setState({...this.state, result:fullName});
    }
    titleCase(name){
        return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    }
    takeNames(obj){
        console.log("Take Names Rec Object ",obj);
        this.nameObject = obj;
       // this.nameObject = obj;
    }
    render(){
        // // Input(takeNames)
        console.log("Render Call");
        return (
            <div>
            <h1> Greet App</h1>
           
            <Input  sendName = {this.takeNames.bind(this)}/>
            <Actions callFullName = {this.getFullNameInTitleCase.bind(this)}/>
            <Output result= {this.state.result}/>
          </div>
        )
    }

}