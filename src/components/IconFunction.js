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
                <IconsIndex name="Conversation" width={30} viewBox='0 0 30 30'/>
            </div>
        )
    }
}