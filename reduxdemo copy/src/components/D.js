import React from 'react';
import {connect} from 'react-redux';
export const D=(props)=> {
    return (
        <div>
                <h1>I am in D Component</h1>
                <h2>Data Rec From A {props.data} </h2>
                <p>{props.x}</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(' Map State to Props Call ',state);
    return {
        data: state.name,
        x:state.msg
    }
    
}

//export default D;
const fnContainsStateProps = connect(mapStateToProps);
export default fnContainsStateProps(D);