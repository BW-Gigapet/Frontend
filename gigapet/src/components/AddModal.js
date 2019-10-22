import React from 'react'
import EditForm from './EditForm'

export function AddModal(props) {
    return (
        <div>
            <h2>Adding New Food Entry</h2>
            <p>Please select the appropriate food group and portion size.</p>
            <div>Close Button</div>
            <EditForm {...props} />
        </div>
    )
}

export default EditModal