import React, { useState, useEffect } from 'react';


const DailyProgressCategory = (props) => {
    const [categoryProgress, setCategoryProgress] = useState(0)

    useEffect(() => {
        {/*  reduce daily entries to get progress*/}
    })


    return (
        <div>
            <p>{props.category}</p>
            <span>Progress Bar</span>
            <p>{categoryProgress}</p>

            {/* reduce the daily entries  */}
        </div>
    )
}

export default DailyProgressCategory;