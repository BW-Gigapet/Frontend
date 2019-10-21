import React from 'react';
import DailyProgressCategory from './DailyProgressCategory';

const categories = [
    'Vegetable',
    'Fruit',
    'Whole Grains',
    'Protein',
    'Fats & Oils',
    'Sugars'
]



const DailyProgressSummary = (props) => {
    console.log('Daily Progress Summary props', props)
    return (
        <div>
            <button>Edit</button>
            {/* map categories */}
            {categories.map(category => (
                <DailyProgressCategory category={category} />
            ))}
            
        </div>
    )
}

export default DailyProgressSummary;