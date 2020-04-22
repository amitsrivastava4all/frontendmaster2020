import React from 'react'
import {NavLink, Route} from 'react-router-dom';
import Football from './children/Football';
const Sports = (props) => {
    const moveToNews=()=>{
        console.log('History Object is ',props);
            props.history.push('/news');
    }
    return (
        <div>
            <h1>I am in Sports Component</h1>
            <button onClick={moveToNews}>Go to News</button>
            <br/>
            <NavLink to="/sports/football/:playername">FootBall</NavLink> &nbsp;
            <NavLink to="/sports/cricket">Cricket</NavLink>

            <Route exact path="/sports/football" component={Football}/>
            <Route exact path="/sports/cricket" render={()=><h2>Cricket Component</h2>}/>
        </div>
    )
}

export default Sports;
