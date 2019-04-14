import React from 'react';

const PreviewDescription = (props) => {
    return(
        <div className="Desc">
            <div className="font-weight-bold pb-1">{props.text}</div>
            <div className="pb-1">Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</div>
            <a className="Link pb-1" href={props.link}>dev.to</a>
        </div>
    )
}

export default PreviewDescription;