import React from 'react';
import {itemOperations} from '../models/itemoperations';
import {List} from '../components/List';
import {Search} from '../components/Search';
export class Shop extends React.Component{
    constructor(props){
        super(props);
        this.msg = false;
        this.state = {items:[], msg:this.msg};
    }
    componentWillMount(){
        let itemArray = itemOperations.fill();
        this.setState({...this.state,items:itemArray});
    }
    toggleMessage(){
        this.msg = !this.msg;
        this.setState({...this.state,msg:this.msg});
    }
    render(){
        return (
            <div>
                {this.state.msg?<p>Shopping</p>:<h1>Shop Here</h1>}
                <button onClick={()=>{
                    this.toggleMessage();
                }}>Toggle</button>
                <Search/>
                <List items = {this.state.items}/>

            </div>
        )
    }
}