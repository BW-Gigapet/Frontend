import React from 'react';
import DailyProgressCategory from './DailyProgressCategory';


const DailyProgressSummary = () => {
    return (
        <div>
            {/* map categories */}
            <DailyProgressCategory /*category={category}*/ />
        </div>
    )
}

export default DailyProgressSummary;