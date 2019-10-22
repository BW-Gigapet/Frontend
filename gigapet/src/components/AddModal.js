import React from 'react'
import EditForm from './EditForm'
import Overlay from './Overlay'

export function AddModal({ category, open, setOpen }) {
    
    function closeModal() {
        setOpen(false)
    }

    return (
        <Overlay open={open}>
            <div>
                <h2>Adding New Food Entry</h2>
                <p>Please select the appropriate food group and portion size.</p>
                <div onClick={closeModal}>Close Button</div> {/*onclick setOpen(false) */}
                <EditForm category={category} />
            </div>
        </Overlay>
    )
}

export default AddModal