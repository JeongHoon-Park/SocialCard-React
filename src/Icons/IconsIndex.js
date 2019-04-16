import React from 'react';

import Conversation from './Conversation.js';
//import Like_filled from './Like_filled.js';
//import Like_blank from './Like_blank.js';
//import Logo from './Logo.js';
//import Retweet from './Retweet.js';

const Icon = (props) => {
    switch(props.name){
        case "Conversation" :
            return <Conversation width={props.width}/>
/*
        case "Like_filled" :
            return <Like_filled width={props.width}/>
        
        case "Like_blank" :
            return <Like_blank width={props.width}/>
        
        case "Logo" :
            return <Logo width={props.width}/>

        case "Retweet" :
            return <Retweet width={props.width}/>
*/        
        default :
            return <div></div>
    }

}

export default Icon;