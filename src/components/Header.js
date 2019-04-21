import React from 'react';
import StringDate from './TrimStringHeader.js';

const App = (props)=>{

    return(
        <div className = "Margin60">
        <h5 className="my-1">
            {props.author} <a className ="Link">@{props.author} ・ <StringDate
            dateMonth={props.date.getMonth()} dateDay={props.date.getDate()}/>
            </a>            
        </h5>
        </div>
    )
}

export default App;
