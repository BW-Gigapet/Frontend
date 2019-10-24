import React from 'react'
import EditForm from './EditForm'
import Overlay from './Overlay'

import { ModalDiv, ModalClose } from './EditModal'

export function AddModal(props) {
    const { category, open, setOpen } = props
    
    function closeModal() {
        setOpen(false)
    }

    return (
        <Overlay open={open}>
            <ModalDiv>
                <h2>Adding New Food Entry</h2>
                <p>Please select the appropriate food group and portion size.</p>
                <ModalClose onClick={closeModal}>+</ModalClose> {/*onclick setOpen(false) */}
                <EditForm {...props} />
            </ModalDiv>
        </Overlay>
    )
}

export default AddModal