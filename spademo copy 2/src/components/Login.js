import React, { Component } from 'react';
import validations from '../utils/validation';
import '../App.css';
class Login extends Component {
    constructor(props) {
        super(props)
        this.errors = {useridError:'',pwdError:'',ageError:''};
        this.state = {
                    errors: this.errors
        }
    }
    doLogin(){
        let userid = this.refs.userid.value;
        console.log('Userid is ',userid);

        if(validations.isBlank(userid)){
            this.errors.useridError = "Userid Can't Be Blank";
            this.setState({errors:this.errors});
            return ;
            console.log('Inside If ');
        }
        else{
            this.errors.useridError = "";
            this.setState({errors:this.errors});
            console.log('Inside Else ');
        }
        if(validations.isMin(userid,5)){
            this.errors.useridError = "Userid Min of 5 Chars";
            this.setState({errors:this.errors});
            console.log('Inside If ');
        }
        else{
            this.errors.useridError = "";
            this.setState({errors:this.errors});
            console.log('Inside Else ');
        }
    }
    render() {
        return (
            <div>
                    <h1>Login </h1>
                    <input type='text' ref='userid' placeholder='Type Userid Here'/>
                    <span className='errors'>{this.state.errors.useridError}</span>
                    <button onClick={this.doLogin.bind(this)}>Login</button>
            </div>
        )
    }
}

export default Login
