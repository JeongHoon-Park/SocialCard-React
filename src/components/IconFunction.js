import React from 'react';
import IconsIndex from '../Icons/IconsIndex.js';

export default class IconFunction extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            like : props.like,
            share : props.share
        }
    }

    render(){
        return(
            <div className="d-flex flex-row">
                <IconsIndex name="Conversation" width={30} />
                <p>{this.state.like}</p>
                <IconsIndex name="Like_blank" width={30}/>
                <IconsIndex name="Retweet" width={30}/>
                <IconsIndex name="Like_filled" width={30} filled='#D75A4A'/>
            </div>
        )
    }
}