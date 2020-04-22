import React from 'react'

const News = (props) => {
    let isAuth = false;
    return (

        <div>
            {isAuth?<h1>News Component</h1>:<h1>U r Not Authorize to See this Page</h1>}
                
        </div>
    )
}

export default News;
