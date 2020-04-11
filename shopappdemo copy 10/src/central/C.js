import React from 'react';
import DataContext from './mydata';
export const C = (props)=>{
    
    return (
        <div>
            <DataContext.Consumer>{
                (value)=>{
                    console.log('Value is ',value)
                return (
                <div>
                <h1> I am C Component {value.name} {value.city}</h1>
                    <button onClick={()=>value.fn('Hello I am C')}>Call Parent A Function</button>
                </div>
                );
            }
        }
            </DataContext.Consumer>
        </div>
    )
}