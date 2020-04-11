import React from 'react';
import { B } from './B';
import DataContext from './mydata';
export const A = (props)=>{
    let cname = 'Brain Mentors';
    let city = 'Delhi';
    const myFunction =(msg)=>{
        console.log('Recieve Msg from C Child ',msg);
    }
    return (
        <div>
            <DataContext.Provider value={{name:cname,city:city,fn:myFunction}}>
            <h1> I am in A Component</h1>
            <B/>
            </DataContext.Provider>
        </div>
    )

}