import React from 'react'

export function EditingEntry(props) {

    function changeButtonHandler(e) {
        // trigger edit modal
    }

    function deleteButtonHandler(e) {
        // axios.delete this entry
    }

    return (
        <tr>
            <td>{props.meal.time}</td>
            <td>{props.meal.portionSize}</td>
            <td>Change</td>
            <td>Delete</td>
        </tr>
    )
}

export default EditingEntry