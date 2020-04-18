import React from 'react';
import { Child } from './components/Child';
class App extends React.Component{
  constructor(props){
    super(props);
    console.log(":::: Cons Call ",props.name);
    this.state = {x:10};
    
  }
  UNSAFE_componentWillMount(){
    console.log('Will Mount call.............');
  }
  componentDidMount(){
    console.log("Did Mount Call and Going to call setState");
    this.setState({x:1000});
  }
  // static getDerivedStateFromProps(props, states){
  //   console.log("Props ",props, " States ",states);
  // return states;
  // }
  render(){
    console.log("App Render Call");
    return (
      <div>
        <h1>App Render {this.state.x}</h1>
        <Child name='Ram' />
      </div>
    )
  }
}

export default App;