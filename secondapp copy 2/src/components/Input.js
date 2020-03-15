import React from 'react';
var obj = {};
var propsObj = {};
function takeInput(event){
    obj[event.target.id] = event.target.value;
    console.log(obj);
    propsObj.sendName(obj);
    // var firstName = event.target.value;
    // var lastName = event.target.value;
    // console.log(firstName + " "+lastName + " "+event.target.id);
}
export const Input = (props)=>{
    propsObj = props;
    return (
        <>
        <label>First Name</label>
        <input id='first' type='text' onChange={takeInput} placeholder='Type First Name Here'/>
            {/* <input type='text' onChange={(event)=>{
                takeInput(event);
            }} placeholder='Type First Name Here'/> */}
            <br/>
            <label>Last Name</label>
            <input id='last' type='text' onChange={takeInput} placeholder='Type Last Name Here'/>
        </>
    )
}