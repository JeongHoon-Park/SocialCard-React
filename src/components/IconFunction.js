import React from 'react';
import Retweet from './Retweet.js';
import Like from './Like.js';

const IconFunction = () => {

    return(
            <div className="d-flex flex-row Margin60">
                <Retweet />
                <Like />
            </div>
    )
}

export default IconFunction;