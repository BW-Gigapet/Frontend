import React from 'react';
import DailyProgressCategory from './DailyProgressCategory';

const categories = [
    {
        name: 'Vegetable',
        progressBar: '#EBF9EF',
        fillerColor: '#82D99C'
    },
    {
        name: 'Fruit',
        progressBar: '#F7F5DE',
        fillerColor: '#DBCF61'
    },
    {
        name: 'Whole Grains',
        progressBar: '#FDEDE7',
        fillerColor: '#F38058'
    },
    {
        name: 'Protein',
        progressBar: '#EAF5FB',
        fillerColor: '#5BAEDC'
    },
    {
        name: 'Fats and Oils',
        progressBar: '#EFEAFA',
        fillerColor: '#9678DE'
    },
    {
        name: 'Sugars',
        progressBar: '#FFEBF6',
        fillerColor: '#FF66B9'
    }
]



const DailyProgressSummary = (props) => {
    console.log('Daily Progress Summary props', props)
    return (
        <div>
            <button>Edit</button>
            {/* map categories */}
            {categories.map(category => (
                <DailyProgressCategory /*key={}*/ category={category} />
            ))}
            
        </div>
    )
}

export default DailyProgressSummary;