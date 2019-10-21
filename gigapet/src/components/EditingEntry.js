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
            <td>{/* time */}</td>
            <td>{/* size */}</td>
            <td>Change</td>
            <td>Delete</td>
        </tr>
    )
}

export default EditingEntry