import React from 'react';
import Filler from './Filler';


const ProgressBar = (props) => {
    console.log('ProgressBar props', props)
    return (
        <div className='progress-bar' style={{background: `${props.category.progressBar}`}}>
            <Filler percentage={props.percentage} category={props.category} />
        </div>
    )
}

export default ProgressBar;