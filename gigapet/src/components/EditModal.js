import React from 'react'
import EditForm from './EditForm'

export function EditModal(props) {
    return (
        <div>
            <h2>Editing Food Entry</h2>
            <p>Please select the appropriate portion size you wish to change to.</p>
            <div>Close Button</div>
            <EditForm />
        </div>
    )
}

export default EditModal