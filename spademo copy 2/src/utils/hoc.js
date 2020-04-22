import React from 'react'

const HOC = (wrappedComponent) => {
    let a = 10;
    let b =20;
    return function(props){
        var {c,d} = props;
        a = a + c;
        b = b + d;
        const newProps = {...props,a:a,b:b};
        return wrappedComponent(newProps);
    }
}

export default HOC;
