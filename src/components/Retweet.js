import React from 'react';

import Retweet from '../Icons/Retweet.js';

export default class RetweeRender extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            tweetNum : 49,
            bool_tweet : false
        }
    }

    flip = () => {
        this.setState({bool_tweet : !this.state.bool_tweet});
    }

    incrementValue = () => {
        this.setState({tweetNum : this.state.tweetNum+1});
    }

    decreaseValue = () => {
        this.setState({tweetNum : this.state.tweetNum-1});
    }

    onClick = () => {
        if(!this.state.bool_tweet){
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
                    <Retweet width={30} height={30}/>
                </button>
                <p>{this.state.tweetNum}</p>                
            </div>

        );        
    }
}