import React from 'react';

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
                <img src="../src/conversation.svg" width="30" height="30"></img>
            </div>
        )
    }
}