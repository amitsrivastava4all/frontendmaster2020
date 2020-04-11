import React,{useState, useRef,useEffect} from 'react';
const HookDemo = (props)=>{
    var name = useRef();
    var age = useRef();
    var salary = useRef();

    useEffect(()=>{
        console.log('@@@@@@@@@@ I am LIke Component DidMount and DidUpdate');
    });

    //var counter = 1;
    //var arrObject = useState(0);
    //console.log('Object is ',arrObject);
    const [counter, mystate] = useState(0);
    const [state, setStateValue] = useState({name:'',age:0,salary:0, msg:'',flag:true});
    
    const save = ()=>{
      
        var userObject = {name:name.current.value, age:age.current.value,salary:salary.current.value};

        setStateValue({...userObject,msg:'Record Saved....',flag:false});
    }

    const plus=()=>{
       // counter++;
       // console.log('Plus is ',counter);
       mystate(counter+1);  
       //setState({...this.state,counter:counter+1})
    }
    var jsx = state.flag? <button onClick={save}>Save</button>:<></>;
    return (
        <div>
            <h1>Hook Demo {counter}</h1>
            <h2>Message is {state.msg}</h2>
            <h3>Data is {state.name} {state.age} {state.salary}</h3>
            <input type='text' ref={name} placeholder='Type Name here'/>
            <input type='text' ref={age} placeholder='Type Age here'/>
            <input type='text' ref={salary} placeholder='Type Salary here'/>
            
           {jsx}
            <button onClick={plus}>Plus</button>

        </div>
    )
}
export default HookDemo;