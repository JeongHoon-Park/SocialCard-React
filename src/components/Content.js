import React from 'react';

const Content = (props) => {
    return(
        <div> 
            <p className="mb-1">
                {props.text}
            </p>  
        </div>    
    )
}

export default Content;