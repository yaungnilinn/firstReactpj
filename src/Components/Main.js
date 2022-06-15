
import React from 'react';

function Main(props){
    return(
        <main className='main' >
            <div style={props.txtColor} >
            <h1 className="mainTitle">Fun facts about React</h1>
            <ul className="mainFacts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </div>
        </main>
    )
}

export default Main