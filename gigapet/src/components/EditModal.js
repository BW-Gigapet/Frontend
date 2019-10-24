import React from 'react'
import EditForm from './EditForm'
import Overlay from './Overlay'
import styled from 'styled-components'

export const ModalDiv = styled.div`
    padding: 10%;
    background: white;
    border-radius: 11px;
`

export function EditModal(props) {
    const { open, setOpen, edit } = props

    function closeModal() {
        setOpen(false)
    }

    return (
        <Overlay open={open}>
            <ModalDiv>
                <h2>Editing Food Entry</h2>
                <p>Please select the appropriate portion size you wish to change to.</p>
                <div onClick={closeModal}>Close Button</div>
                <EditForm {...props} category={props.edit.name} portion={props.edit.portionSize} />
            </ModalDiv>
        </Overlay>
    )
}

export default EditModal