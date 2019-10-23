import React from 'react'

export function SummaryData({daily, weekly, monthly}) {
    return (
        <div>
            <div>
                <p>Daily Average</p>
                <p>{daily}</p>
            </div>
            <div>
                <p>Weekly Average</p>
                <p>{weekly}</p>
            </div>
            <div>
                <p>Monthly Average</p>
                <p>{monthly}</p>
            </div>
        </div>
    )
}

export default SummaryData