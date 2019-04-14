import React from 'react';

const Preview = (props) => {

    return (
        <div className="bg-orange p-2 mb-2">
            <div className="d-flex flex-row Index text-white align-items-center justify-content-center">
                <h5 className="mb-0">DEV</h5>
            </div>
            <div className="d-flex flex-row justify-content-center py-5 px-4 text-white">              
                <h2>
                    {props.text}
                </h2>
            </div>
            <div className="d-flex flex-row mb-2 mx-2 CardBox ml-auto bg-white text-orange align-items-center">
                <div className = "justify-content-center mx-auto">
                    <h5 className="mb-0 font-weight-bold" >
                        {props.author}
                    </h5>
                </div>
                <div className = "SmallImage">
                </div>
            </div>
        </div>        
    )

}

export default Preview;