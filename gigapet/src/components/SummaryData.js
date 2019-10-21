import React from 'react'

export function SummaryData(props) {
    return (
        <div>
            <div>
                <p>Daily Average</p>
                <p>{/* data */}%</p>
            </div>
            <div>
                <p>Weekly Average</p>
                <p>{/* data */}%</p>
            </div>
            <div>
                <p>Monthly Average</p>
                <p>{/* data */}%</p>
            </div>
        </div>
    )
}

export default SummaryData