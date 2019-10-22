import React from 'react'


const Filler = (props) => {
    console.log("Filler props", props)
    return (
        <div 
            className='filler'
            style={{width: `${props.percentage}%`, background: `${props.category.fillerColor}`}}

        />
    )
}

export default Filler;