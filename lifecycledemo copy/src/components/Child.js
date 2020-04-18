import React from 'react'; 
import PropTypes from 'prop-types';
export class Child extends React.Component{
    
    render(){
        console.log('Child Render Call');
        return (<div>I am Child {this.props.name} {this.props.age} {this.props.salary}</div>);
    }
}
Child.defaultProps = {
    salary:90000
}
Child.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    salary:PropTypes.number
}