import React from 'react'

const SVG = ({
    name = '',
    style = {},
    fill = '#000',
    width = '100%',
    className = '',
    height = '100%',
    viewBox ='0 0 32 32'
}) =>
    <svg 
        height={height}
        viewBox={viewBox}
        width={width}
        style={style}
        className = {className}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M502.75,280.75c9,9,9,23,0,32l-69,69c-4,4-10,7-16,7s-12-3-16-7l-69-69c-9-9-9-23,0-32s22-9,31,0
			l32,32v-147h-197c-12,0-22-11-22-23s10-22,22-22h219c12,0,22,10,22,22v170l32-32C480.75,271.75,493.75,271.75,502.75,280.75z"/>
		<path d="M310.75,343.75c12,0,22,11,22,23s-10,22-22,22h-219c-12,0-22-10-22-22v-170l-32,32c-9,9-22,9-31,0
			s-9-23,0-32l69-70c4-4,10-6,16-6s12,2,16,6l69,70c9,9,9,23,0,32c-4,4-10,6-16,6s-11-2-15-6l-32-32v147H310.75z"/>
    </svg>    


export default SVG;