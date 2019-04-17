import React from 'react';
import IconsIndex from '../Icons/IconsIndex.js';
import Retweet from './Retweet.js';
import Like from './Like.js';

const IconFunction = () => {

    return(
            <div className="d-flex flex-row">
                <Retweet />
                <Like />
            </div>
    )
}

export default IconFunction;