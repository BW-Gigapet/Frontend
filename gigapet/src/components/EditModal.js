import React from 'react'
import EditForm from './EditForm'
import Overlay from './Overlay'

export function EditModal(props) {
    const { open, setOpen, edit } = props

    function closeModal() {
        setOpen(false)
    }

    return (
        <Overlay open={open}>
            <div>
                <h2>Editing Food Entry</h2>
                <p>Please select the appropriate portion size you wish to change to.</p>
                <div onClick={closeModal}>Close Button</div>
                <EditForm {...props} category={props.edit.name} portion={props.edit.portionSize} />
            </div>
        </Overlay>
    )
}

export default EditModal