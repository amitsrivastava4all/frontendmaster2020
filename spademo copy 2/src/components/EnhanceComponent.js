import React from 'react'
import HOC from '../utils/hoc';
const EnhanceComp = (props) => {
    return (
        <div>


                <h1> {props.c} {props.d} I am a Enhance Component</h1>
        <h2>Coming from HOC {props.a} {props.b}</h2>
        </div>
    )
}

export default HOC(EnhanceComp);
