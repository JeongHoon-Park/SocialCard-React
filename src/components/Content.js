import React from 'react';

const Content = (props) => {
    return(
        <div> 
            <p className="mb-2">
                {props.text}
            </p>  
        </div>    
    )
}

export default Content;