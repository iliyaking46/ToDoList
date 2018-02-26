import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        return(
            <div>
                I'm App
            </div>
        )
       
    }
}

const MOUNT_NODE = document.getElementById('app')

ReactDOM.render(
    <App />, MOUNT_NODE
)
