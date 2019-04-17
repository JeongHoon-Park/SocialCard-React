import React from 'react';

import Like_blank from '../Icons/Like_blank.js';

export default class LikeRender extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            likeNum : 129,
            bool_like : false
        }
    }

    flip = () => {
        this.setState({bool_like : !this.state.bool_like});
    }

    incrementValue = () => {
        this.setState({likeNum : this.state.likeNum+1});
    }

    decreaseValue = () => {
        this.setState({likeNum : this.state.likeNum-1});
    }

    onClick = () => {
        if(!this.state.bool_like){
            this.incrementValue();
        }
        else{
            this.decreaseValue();
        }
        this.flip();
    }

    render(){
        return(
            <div>
                <button onClick={this.onClick} className='btn'>
                    <Like_blank  width={30} height={30}/>
                </button>
                <p>{this.state.likeNum}</p>                
            </div>

        );        
    }
}