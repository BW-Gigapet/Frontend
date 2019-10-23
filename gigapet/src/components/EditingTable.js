import React from 'react'

import { EditingEntry } from './index'

export function EditingTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Time</td>
                    <td>Size</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {/* map table entries */}
                {props.meals.map(meal => <EditingEntry key={meal.id} meal={meal}/>)} 
            </tbody>
        </table>
    )
}

export default EditingTable