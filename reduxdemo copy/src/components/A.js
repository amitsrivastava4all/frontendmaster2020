import React ,{useRef} from 'react';
import {actionFiller} from '../actions/action';
import {store} from '../store/commonstore';
import B from './B';
export const A=()=> {
    var name = useRef();
    const send=()=>{
        var nameValue = name.current.value;
        console.log('Name is in A Component ',nameValue);
        const action = actionFiller(nameValue);
         store.dispatch(action);
    }
    return (
        <div>
            <input type='text' ref={name}/>
            <button onClick={send}>Send Name to D</button>
                <B/>
        </div>
    )
}

export default A;
